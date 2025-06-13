import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Play, Users, Trophy } from "lucide-react";

interface GameQuestionProps {
  question: {
    id: number;
    text: string;
    category: string;
    difficulty: string;
    answer: string;
    points: number;
  };
  teams: Array<{ name: string; score: number }>;
  onAnswerProcessed: (teamIndex: number | null) => void;
  onNextQuestion: () => void;
}

const GameQuestion = ({ question, teams, onAnswerProcessed, onNextQuestion }: GameQuestionProps) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<string>("");

  // Set first team as selected when showing answer
  useEffect(() => {
    if (showAnswer) {
      setSelectedTeam("0");
    }
  }, [showAnswer]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && !showAnswer) {
        e.preventDefault();
        setShowAnswer(true);
        return;
      }

      if (!showAnswer) return;

      const options = ["0", "1", "both", "none"];
      const currentIndex = options.indexOf(selectedTeam);
      let prevIndex, nextIndex;

      switch (e.key) {
        case "w":
          e.preventDefault();
          prevIndex = (currentIndex - 1 + options.length) % options.length;
          setSelectedTeam(options[prevIndex]);
          break;
        case "s":
          e.preventDefault();
          nextIndex = (currentIndex + 1) % options.length;
          setSelectedTeam(options[nextIndex]);
          break;
        case "Enter":
          e.preventDefault();
          if (selectedTeam) {
            handleTeamSelection();
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showAnswer, selectedTeam]);

  const handleProcessAnswer = () => {
    setShowAnswer(true);
  };

  const handleTeamSelection = () => {
    if (selectedTeam === "both") {
      onAnswerProcessed(-1); // Both teams get points
    } else if (selectedTeam === "none") {
      onAnswerProcessed(null); // No one gets points
    } else {
      onAnswerProcessed(parseInt(selectedTeam)); // Specific team gets points
    }

    // Reset for next question
    setShowAnswer(false);
    setSelectedTeam("");
    onNextQuestion();
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-2 md:p-4 space-y-2 md:space-y-4">
      <Card className="card-shadow fade-in">
        {!showAnswer ? (
          <>
            <CardHeader className="text-center p-2 md:p-4">
              <div className="flex flex-wrap items-center justify-center gap-1 mb-1">
                <span className="bg-primary text-white px-2 py-1 rounded-full text-xs md:text-sm">
                  {question.category}
                </span>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs md:text-sm">
                  {question.difficulty}
                </span>
              </div>
              <CardTitle className="text-xl md:text-2xl lg:text-3xl text-gray-800">
                السؤال رقم {question.id}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-2 md:p-4">
              <div className="text-center">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-3 md:mb-4 leading-relaxed">
                  {question.text}
                </p>
                <Button
                  className="gradient-button text-white px-4 md:px-6 py-2 text-base md:text-lg hover-scale pulse-glow w-full sm:w-auto"
                  onClick={() => setShowAnswer(true)}
                >
                  <Play className="w-4 md:w-5 h-4 md:h-5 ml-2" />
                  اعرض الإجابة
                </Button>
              </div>
            </CardContent>
          </>
        ) : (
          <>
            <CardHeader className="text-center p-2 md:p-4">
              <div className="flex flex-wrap items-center justify-center gap-1 mb-1">
                <span className="bg-primary text-white px-2 py-1 rounded-full text-xs md:text-sm">
                  {question.category}
                </span>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs md:text-sm">
                  {question.difficulty}
                </span>
              </div>
              <CardTitle className="text-xl md:text-2xl lg:text-3xl text-gray-800">
                الإجابة
              </CardTitle>
            </CardHeader>
            <CardContent className="p-2 md:p-4">
              <div className="text-center space-y-3">
                <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-2 leading-relaxed">
                    {question.answer}
                  </p>
                  <div className="text-sm md:text-base text-gray-500">
                    النقاط: {question.points}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                    اختر الفريق الفائز
                  </h3>

                  <RadioGroup
                    value={selectedTeam}
                    onValueChange={setSelectedTeam}
                    className="grid gap-2"
                  >
                    {teams.map((team, index) => (
                      <div
                        key={team.name}
                        className={`flex items-center space-x-2 p-2 rounded-lg border cursor-pointer transition-all
                          ${selectedTeam === index.toString()
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 hover:border-primary/50'}`}
                      >
                        <RadioGroupItem value={index.toString()} id={`team-${index}`} />
                        <Label
                          htmlFor={`team-${index}`}
                          className="flex-1 flex items-center justify-between cursor-pointer"
                        >
                          <span className="text-base md:text-lg">{team.name}</span>
                          <div className="flex items-center gap-1">
                            <Trophy className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm md:text-base">{team.score}</span>
                          </div>
                        </Label>
                      </div>
                    ))}

                    <div
                      className={`flex items-center space-x-2 p-2 rounded-lg border cursor-pointer transition-all
                        ${selectedTeam === "both"
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-primary/50'}`}
                    >
                      <RadioGroupItem value="both" id="team-both" />
                      <Label
                        htmlFor="team-both"
                        className="flex-1 text-base md:text-lg cursor-pointer"
                      >
                        كلا الفريقين
                      </Label>
                    </div>

                    <div
                      className={`flex items-center space-x-2 p-2 rounded-lg border cursor-pointer transition-all
                        ${selectedTeam === "none"
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-primary/50'}`}
                    >
                      <RadioGroupItem value="none" id="team-none" />
                      <Label
                        htmlFor="team-none"
                        className="flex-1 text-base md:text-lg cursor-pointer"
                      >
                        لا أحد
                      </Label>
                    </div>
                  </RadioGroup>

                  <Button
                    className="gradient-button text-white px-4 md:px-6 py-2 text-base md:text-lg hover-scale pulse-glow w-full sm:w-auto mt-2"
                    onClick={handleTeamSelection}
                    disabled={!selectedTeam}
                  >
                    <Users className="w-4 md:w-5 h-4 md:h-5 ml-2" />
                    التالي
                  </Button>
                </div>
              </div>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  );
};

export default GameQuestion;