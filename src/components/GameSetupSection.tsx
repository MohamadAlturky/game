
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users, UserPlus, Minus, Plus } from "lucide-react";

const GameSetupSection = () => {
  const navigate = useNavigate();
  const [teamName, setTeamName] = useState("");
  const [playerCount, setPlayerCount] = useState(2);
  const [gameMode, setGameMode] = useState("team");

  const gameModes = [
    { id: "single", name: "لاعب واحد", description: "العب بمفردك واختبر معلوماتك" },
    { id: "team", name: "فريق واحد", description: "العب مع أصدقائك في فريق واحد" },
    { id: "versus", name: "فريق ضد فريق", description: "تحدى فريق آخر في منافسة مثيرة" }
  ];

  const handleStartGame = () => {
    navigate("/game");
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">إعداد اللعبة</h2>
          <p className="text-xl text-gray-600">اختر طريقة اللعب وقم بإعداد فريقك</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Game Mode Selection */}
          <Card className="card-shadow slide-in-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                نوع اللعبة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {gameModes.map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setGameMode(mode.id)}
                    className={`w-full p-4 text-right rounded-lg border-2 transition-all hover-scale ${
                      gameMode === mode.id 
                        ? "border-primary bg-primary/10" 
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="font-semibold">{mode.name}</div>
                    <div className="text-sm text-gray-600 mt-1">{mode.description}</div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Team Setup */}
          <Card className="card-shadow slide-in-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserPlus className="w-5 h-5" />
                إعداد الفريق
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Team Name */}
              <div>
                <Label htmlFor="teamName">اسم الفريق</Label>
                <Input
                  id="teamName"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="أدخل اسم فريقك"
                  className="mt-1"
                />
              </div>

              {/* Player Count */}
              <div>
                <Label>عدد اللاعبين</Label>
                <div className="flex items-center gap-4 mt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPlayerCount(Math.max(1, playerCount - 1))}
                    disabled={playerCount <= 1}
                    className="hover-scale"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="text-2xl font-semibold w-12 text-center">{playerCount}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPlayerCount(Math.min(8, playerCount + 1))}
                    disabled={playerCount >= 8}
                    className="hover-scale"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-1">من 1 إلى 8 لاعبين</p>
              </div>

              {/* Start Game Button */}
              <Button 
                className="w-full gradient-button text-white border-0 py-3 hover-scale pulse-glow"
                disabled={!teamName.trim()}
                onClick={handleStartGame}
              >
                ابدأ اللعب الآن
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GameSetupSection;
