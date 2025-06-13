import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, Star } from "lucide-react";

interface GameScoreboardProps {
  teams: Array<{ name: string; score: number }>;
  currentQuestion: number;
  totalQuestions: number;
}

const GameScoreboard = ({ teams, currentQuestion, totalQuestions }: GameScoreboardProps) => {
  const sortedTeams = [...teams].sort((a, b) => b.score - a.score);
  const maxScore = Math.max(...teams.map(team => team.score));

  return (
    <div className="w-full">
      <Card className="card-shadow slide-in-right">
        <CardHeader className="text-center p-4 md:p-6">
          <CardTitle className="flex items-center justify-center gap-2 text-lg md:text-xl">
            <Trophy className="w-4 md:w-5 h-4 md:h-5" />
            لوحة النتائج
          </CardTitle>
          <p className="text-xs md:text-sm text-gray-600">
            السؤال {currentQuestion} من {totalQuestions}
          </p>
        </CardHeader>
        <CardContent className="p-4 md:p-6">
          <div className="space-y-3">
            {sortedTeams.map((team, index) => (
              <div
                key={index}
                className={`p-3 md:p-4 rounded-lg border-2 transition-all duration-300 ${team.score === maxScore && team.score > 0
                    ? "border-yellow-400 bg-yellow-50 bounce-in"
                    : "border-gray-200 bg-gray-50"
                  }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    {index === 0 && team.score > 0 && (
                      <Star className="w-4 md:w-5 h-4 md:h-5 text-yellow-500 flex-shrink-0" />
                    )}
                    <Users className="w-3 md:w-4 h-3 md:h-4 text-gray-600 flex-shrink-0" />
                    <span className="font-semibold text-gray-800 text-sm md:text-base truncate">
                      {team.name}
                    </span>
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-primary flex-shrink-0">
                    {team.score}
                  </div>
                </div>

                {/* Score Bar */}
                <div className="mt-2 bg-gray-200 rounded-full h-1.5 md:h-2">
                  <div
                    className="gradient-button h-1.5 md:h-2 rounded-full transition-all duration-500"
                    style={{
                      width: maxScore > 0 ? `${(team.score / maxScore) * 100}%` : '0%'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GameScoreboard; 