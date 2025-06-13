import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Question {
    id: number;
    text: string;
    answer: string;
}

const sampleQuestions: Question[] = [
    { id: 1, text: "ما هي عاصمة فرنسا؟", answer: "باريس" },
    { id: 2, text: "ما هو ناتج 2 + 2؟", answer: "4" },
    { id: 3, text: "ما هو أكبر كوكب في مجموعتنا الشمسية؟", answer: "المشتري" },
    // Add more questions as needed
];

const RingGame = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [activePlayer, setActivePlayer] = useState<number | null>(null);
    const [scores, setScores] = useState({ player1: 0, player2: 0 });
    const { toast } = useToast();

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isTimerRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            handleTimeUp();
        }
        return () => clearInterval(timer);
    }, [isTimerRunning, timeLeft]);

    const handleTimeUp = () => {
        setIsTimerRunning(false);
        setTimeLeft(10);
        setActivePlayer(null);
        toast({
            title: "انتهى الوقت!",
            description: "سيتم تمرير السؤال للاعب الآخر.",
        });
    };

    const handlePlayerClick = (playerNumber: number) => {
        if (activePlayer === null) {
            setActivePlayer(playerNumber);
            setIsTimerRunning(true);
            setTimeLeft(10);
        }
    };

    const handleAnswer = (isCorrect: boolean) => {
        if (activePlayer) {
            if (isCorrect) {
                setScores((prev) => ({
                    ...prev,
                    [`player${activePlayer}`]: prev[`player${activePlayer}`] + 1,
                }));
                toast({
                    title: "إجابة صحيحة!",
                    description: `اللاعب ${activePlayer} يحصل على نقطة!`,
                });
            } else {
                toast({
                    title: "إجابة خاطئة!",
                    description: "حاول مرة أخرى في المرة القادمة!",
                });
            }
        }
        setIsTimerRunning(false);
        setTimeLeft(10);
        setActivePlayer(null);
        setCurrentQuestionIndex((prev) => (prev + 1) % sampleQuestions.length);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-1 py-10">
                <div className="container mx-auto p-4 max-w-4xl">
                    <h1 className="text-3xl font-bold text-center mb-8">لعبة الجرس</h1>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <Card className="p-4 text-center">
                            <CardContent>
                                <h2 className="text-xl font-semibold mb-2">اللاعب 1</h2>
                                <p className="text-2xl font-bold">{scores.player1}</p>
                                <Button
                                    className="mt-4 w-full gradient-button text-white border-0"
                                    onClick={() => handlePlayerClick(1)}
                                    disabled={activePlayer !== null}
                                >
                                    {activePlayer === 1 ? "دورك!" : "خذ دورك"}
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="p-4 text-center">
                            <CardContent>
                                <h2 className="text-xl font-semibold mb-2">اللاعب 2</h2>
                                <p className="text-2xl font-bold">{scores.player2}</p>
                                <Button
                                    className="mt-4 w-full gradient-button text-white border-0"
                                    onClick={() => handlePlayerClick(2)}
                                    disabled={activePlayer !== null}
                                >
                                    {activePlayer === 2 ? "دورك!" : "خذ دورك"}
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    <Card className="p-6 mb-8">
                        <CardContent>
                            <h2 className="text-2xl font-bold mb-4 text-right">السؤال {currentQuestionIndex + 1}</h2>
                            <p className="text-xl mb-4 text-right">{sampleQuestions[currentQuestionIndex].text}</p>

                            {activePlayer && (
                                <div className="mb-4">
                                    <Progress value={(timeLeft / 10) * 100} className="h-2" />
                                    <p className="text-center mt-2">الوقت المتبقي: {timeLeft} ثواني</p>
                                </div>
                            )}

                            {activePlayer && (
                                <div className="flex gap-4 justify-center">
                                    <Button
                                        onClick={() => handleAnswer(true)}
                                        className="gradient-button text-white border-0"
                                    >
                                        صحيح
                                    </Button>
                                    <Button
                                        onClick={() => handleAnswer(false)}
                                        variant="destructive"
                                    >
                                        خاطئ
                                    </Button>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default RingGame; 