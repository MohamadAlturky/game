import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GameQuestion from "@/components/GameQuestion";
import GameScoreboard from "@/components/GameScoreboard";
import {
  Globe, Trophy, Palette, BookOpen, Landmark, Stethoscope, Calculator, Atom, Gamepad2, Utensils, Car, Music, Plane, Heart, Cpu, Rocket, PawPrint, Languages, Banknote, Film
} from "lucide-react";
import categoriesData from "@/data/categories.json";
import questionsData from "@/data/questions.json";

const iconMap = {
  Globe,
  Trophy,
  Palette,
  BookOpen,
  Landmark,
  Stethoscope,
  Calculator,
  Atom,
  Gamepad2,
  Utensils,
  Car,
  Music,
  Plane,
  Heart,
  Cpu,
  Rocket,
  PawPrint,
  Languages,
  Banknote,
  Film
};

const categories = categoriesData.categories.map(cat => ({
  ...cat,
  icon: iconMap[cat.icon]
}));

const mockQuestions = questionsData.questions;

const GameBoard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { categories: selectedCategories, gameName, teams } = location.state || {};

  // Add state for keyboard navigation
  const [focusedQuestion, setFocusedQuestion] = useState({ catIndex: 0, questionIndex: 0 });
  const questionRefs = useRef({});

  // Initialize state with localStorage values if they exist
  const [currentQuestion, setCurrentQuestion] = useState(() => {
    const saved = localStorage.getItem('currentQuestion');
    return saved ? JSON.parse(saved) : null;
  });
  
  const [teamScores, setTeamScores] = useState(() => {
    const saved = localStorage.getItem('teamScores');
    return saved ? JSON.parse(saved) : teams.map((team) => ({ name: team, score: 0 }));
  });
  
  const [answeredQuestions, setAnsweredQuestions] = useState(() => {
    const saved = localStorage.getItem('answeredQuestions');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });
  
  const [showGameBoard, setShowGameBoard] = useState(() => {
    const saved = localStorage.getItem('showGameBoard');
    return saved ? JSON.parse(saved) : true;
  });
  
  const [isGameOver, setIsGameOver] = useState(() => {
    const saved = localStorage.getItem('isGameOver');
    return saved ? JSON.parse(saved) : false;
  });

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('currentQuestion', JSON.stringify(currentQuestion));
    localStorage.setItem('teamScores', JSON.stringify(teamScores));
    localStorage.setItem('answeredQuestions', JSON.stringify([...answeredQuestions]));
    localStorage.setItem('showGameBoard', JSON.stringify(showGameBoard));
    localStorage.setItem('isGameOver', JSON.stringify(isGameOver));
  }, [currentQuestion, teamScores, answeredQuestions, showGameBoard, isGameOver]);

  // Add keyboard navigation handler
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!showGameBoard) return;

      const { catIndex, questionIndex } = focusedQuestion;
      const currentCategory = selectedCategories[catIndex];
      const questions = mockQuestions[currentCategory] || [];
      let question;
      
      switch (e.key.toLowerCase()) {
        case 'w':
          if (catIndex > 0) {
            setFocusedQuestion({ catIndex: catIndex - 1, questionIndex });
          }
          break;
        case 's':
          if (catIndex < selectedCategories.length - 1) {
            setFocusedQuestion({ catIndex: catIndex + 1, questionIndex });
          }
          break;
        case 'a':
          if (questionIndex > 0) {
            setFocusedQuestion({ catIndex, questionIndex: questionIndex - 1 });
          }
          break;
        case 'd':
          if (questionIndex < questions.length - 1) {
            setFocusedQuestion({ catIndex, questionIndex: questionIndex + 1 });
          }
          break;
        case 'enter':
          question = questions[questionIndex];
          if (question && !answeredQuestions.has(`${currentCategory}-${question.id}`)) {
            handleQuestionClick(question, currentCategory);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [focusedQuestion, showGameBoard, selectedCategories, answeredQuestions]);

  const handleQuestionClick = (question, catId) => {
    if (!answeredQuestions.has(`${catId}-${question.id}`)) {
      setCurrentQuestion({ ...question, catId });
      setShowGameBoard(false);
    }
  };

  const handleAnswerProcessed = (teamIndex) => {
    if (currentQuestion) {
      if (teamIndex === -1) {
        setTeamScores((prev) => prev.map((team) => ({ ...team, score: team.score + currentQuestion.points })));
      } else if (teamIndex !== null) {
        setTeamScores((prev) => prev.map((team, index) => ({ ...team, score: index === teamIndex ? team.score + currentQuestion.points : team.score })));
      }
      setAnsweredQuestions((prev) => {
        const newSet = new Set([...prev, `${currentQuestion.catId}-${currentQuestion.id}`]);
        // Check if all questions are answered
        const totalQuestions = selectedCategories.length * 6;
        if (newSet.size === totalQuestions) {
          setIsGameOver(true);
        }
        return newSet;
      });
      setCurrentQuestion(null);
      setShowGameBoard(true);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(null);
    setShowGameBoard(true);
  };

  const handleNewGame = () => {
    // Clear localStorage when starting a new game
    localStorage.clear();
    navigate('/');
  };

  // Function to get winners
  const getWinners = () => {
    const maxScore = Math.max(...teamScores.map(team => team.score));
    return teamScores.filter(team => team.score === maxScore);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col">
      <Header />
      <main className="flex-1 py-10">
        <div className="max-w-7xl mx-auto px-2 md:px-6">
          <h1 className="text-3xl font-bold text-center mb-10 text-primary drop-shadow">{gameName}</h1>

          {showGameBoard ? (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Scoreboard - sticky on desktop, top on mobile */}
              <div className="lg:order-2 lg:w-1/4 w-full mb-6 lg:mb-0">
                <div className="lg:sticky lg:top-24">
                  <GameScoreboard
                    teams={teamScores}
                    currentQuestion={answeredQuestions.size}
                    totalQuestions={selectedCategories.length * 6}
                  />
                </div>
              </div>
              {/* Game Board */}
              <div className="lg:order-1 flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                  {selectedCategories.map((catId, catIndex) => {
                    const cat = categories.find((c) => c.id === catId);
                    const IconComponent = {
                      Globe, Trophy, Palette, BookOpen, Landmark, Stethoscope, Calculator, Atom, Gamepad2, Utensils, Car, Music, Plane, Heart, Cpu, Rocket, PawPrint, Languages, Banknote, Film
                    }[cat.icon] || Globe;
                    const questions = mockQuestions[catId] || [];
                    return (
                      <div key={catId} className="flex flex-col items-center w-full">
                        {/* Category Card */}
                        <Card className="mb-3 border-2 shadow-lg rounded-xl w-full bg-white relative">
                          <CardContent className="p-3 text-center">
                            <div className={`w-12 h-12 ${cat.color} rounded-full flex items-center justify-center mx-auto mb-2 shadow-md`}>
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div className="font-semibold mb-1 text-primary text-lg">{cat.name}</div>
                            <div className="text-xs text-gray-500 mb-2">{cat.description}</div>
                            <span className="absolute top-2 left-2 bg-primary text-white text-xs rounded-full px-2 py-0.5 shadow">{questions.length} سؤال</span>
                            <div className="flex flex-wrap justify-center gap-2 mt-3">
                              {questions.length === 0 && (
                                <div className="text-center text-gray-400 text-xs w-full">لا توجد أسئلة</div>
                              )}
                              {questions.map((question, questionIndex) => {
                                const isAnswered = answeredQuestions.has(`${catId}-${question.id}`);
                                const isFocused = focusedQuestion.catIndex === catIndex && focusedQuestion.questionIndex === questionIndex;
                                let badgeColor = "";
                                if (isAnswered) {
                                  badgeColor = "bg-blue-50 text-blue-300 border-blue-100";
                                } else if (question.difficulty === "easy") {
                                  badgeColor = "bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200";
                                } else if (question.difficulty === "medium") {
                                  badgeColor = "bg-blue-200 text-blue-800 hover:bg-blue-300 border-blue-300";
                                } else {
                                  badgeColor = "bg-blue-300 text-blue-900 hover:bg-blue-400 border-blue-400";
                                }
                                return (
                                  <button
                                    key={question.id}
                                    ref={el => questionRefs.current[`${catId}-${question.id}`] = el}
                                    className={`rounded-full px-4 py-1 font-bold text-sm shadow-sm transition-all duration-200 border focus:outline-none focus:ring-2 focus:ring-primary/30 ${badgeColor} ${isAnswered ? "opacity-60 cursor-not-allowed" : "cursor-pointer"} ${isFocused ? "ring-4 ring-primary" : ""}`}
                                    disabled={isAnswered}
                                    tabIndex={isAnswered ? -1 : 0}
                                    onClick={() => !isAnswered && handleQuestionClick(question, catId)}
                                    onKeyPress={(e) => {
                                      if (e.key === "Enter" && !isAnswered) handleQuestionClick(question, catId);
                                    }}
                                  >
                                    {question.points}
                                  </button>
                                );
                              })}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : null}

          {/* Question Modal */}
          {currentQuestion && (
            <GameQuestion
              question={currentQuestion}
              teams={teamScores}
              onAnswerProcessed={handleAnswerProcessed}
              onNextQuestion={handleNextQuestion}
            />
          )}

          {/* Game Over Modal */}
          {isGameOver && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center">
                <h2 className="text-2xl font-bold text-primary mb-4">انتهت اللعبة!</h2>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">النتائج النهائية:</h3>
                  {teamScores.map((team, index) => (
                    <div key={index} className="text-lg mb-2">
                      {team.name}: {team.score} نقطة
                    </div>
                  ))}
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">الفائزون:</h3>
                  {getWinners().map((winner, index) => (
                    <div key={index} className="text-2xl font-bold text-green-600 mb-2">
                      {winner.name} 🏆
                    </div>
                  ))}
                </div>
                <button
                  onClick={handleNewGame}
                  className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  لعبة جديدة
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GameBoard;