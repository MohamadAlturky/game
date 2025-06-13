import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Clock, Star, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";

const challenges = [
  {
    id: 1,
    title: "تحدي المعرفة العامة",
    description: "50 سؤال متنوع من جميع الفئات",
    difficulty: "متوسط",
    duration: "30 دقيقة",
    participants: 1250,
    reward: "500 نقطة",
    icon: Trophy,
    color: "bg-yellow-500"
  },
  {
    id: 2,
    title: "ماراثون العلوم",
    description: "تحدي خاص بالعلوم والتكنولوجيا",
    difficulty: "صعب",
    duration: "45 دقيقة",
    participants: 890,
    reward: "750 نقطة",
    icon: Zap,
    color: "bg-blue-500"
  },
  {
    id: 3,
    title: "سرعة البرق",
    description: "أجب على أكبر عدد من الأسئلة في 10 دقائق",
    difficulty: "سهل",
    duration: "10 دقائق",
    participants: 2100,
    reward: "300 نقطة",
    icon: Target,
    color: "bg-red-500"
  },
  {
    id: 4,
    title: "تحدي الأدب العربي",
    description: "أسئلة متخصصة في الأدب والشعر العربي",
    difficulty: "صعب",
    duration: "35 دقيقة",
    participants: 680,
    reward: "600 نقطة",
    icon: Star,
    color: "bg-green-500"
  }
];

const weeklyLeaders = [
  { name: "أحمد محمد", score: 2850, avatar: "🏆" },
  { name: "فاطمة علي", score: 2720, avatar: "🥈" },
  { name: "محمد سالم", score: 2650, avatar: "🥉" },
  { name: "نور الهدى", score: 2580, avatar: "⭐" },
  { name: "عبدالله خالد", score: 2520, avatar: "💎" }
];

const Challenges = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              التحديات والمسابقات
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اختبر معرفتك في تحديات مثيرة واربح النقاط والجوائز
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Challenges Section */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">التحديات المتاحة</h2>
              <div className="space-y-6">
                {challenges.map((challenge) => (
                  <Card key={challenge.id} className="card-shadow hover-scale fade-in">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 ${challenge.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <challenge.icon className="w-6 h-6 text-white" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold text-gray-800">
                              {challenge.title}
                            </h3>
                            <Badge variant={
                              challenge.difficulty === "سهل" ? "secondary" :
                              challenge.difficulty === "متوسط" ? "default" : "destructive"
                            }>
                              {challenge.difficulty}
                            </Badge>
                          </div>
                          
                          <p className="text-gray-600 mb-4">
                            {challenge.description}
                          </p>
                          
                          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {challenge.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {challenge.participants} مشارك
                            </div>
                            <div className="flex items-center gap-1">
                              <Trophy className="w-4 h-4" />
                              {challenge.reward}
                            </div>
                          </div>
                          
                          <Button className="gradient-button text-white hover-scale">
                            ابدأ التحدي
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Leaderboard Section */}
            <div>
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    المتصدرون هذا الأسبوع
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {weeklyLeaders.map((leader, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                        <span className="text-2xl">{leader.avatar}</span>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-800 truncate">
                            {leader.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {leader.score.toLocaleString()} نقطة
                          </p>
                        </div>
                        <Badge variant="outline">
                          #{index + 1}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Start */}
              <Card className="card-shadow mt-6">
                <CardContent className="p-6 text-center">
                  <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    لعبة سريعة
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    ابدأ لعبة سريعة مع أصدقائك الآن
                  </p>
                  <Link to="/game">
                    <Button className="gradient-button text-white w-full hover-scale">
                      ابدأ الآن
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Challenges;
