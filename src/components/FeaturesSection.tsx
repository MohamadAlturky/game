import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Trophy, 
  Users, 
  Clock, 
  Shield, 
  Star,
  Gift,
  Smartphone
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "سرعة وإثارة",
      description: "أسئلة سريعة ومثيرة تحافظ على التشويق طوال الوقت",
      color: "bg-yellow-500"
    },
    {
      icon: Trophy,
      title: "تحديات متنوعة",
      description: "مستويات مختلفة من الصعوبة لتناسب جميع الأعمار",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "لعب جماعي",
      description: "استمتع مع الأصدقاء والعائلة في تحديات مثيرة",
      color: "bg-green-500"
    },
    {
      icon: Clock,
      title: "وقت محدود",
      description: "فكر بسرعة واتخذ قراراتك في الوقت المحدد",
      color: "bg-red-500"
    },
    {
      icon: Shield,
      title: "آمن ونظيف",
      description: "محتوى مناسب لجميع أفراد العائلة وآمن تماماً",
      color: "bg-purple-500"
    },
    {
      icon: Star,
      title: "نقاط ومكافآت",
      description: "اجمع النقاط واحصل على شارات وجوائز مميزة",
      color: "bg-pink-500"
    },
    {
      icon: Gift,
      title: "جوائز يومية",
      description: "مكافآت وهدايا يومية للاعبين النشطين",
      color: "bg-orange-500"
    },
    {
      icon: Smartphone,
      title: "متوافق مع الجوال",
      description: "العب في أي مكان وأي وقت من هاتفك المحمول",
      color: "bg-teal-500"
    }
  ];

  return (
    <section className="py-16 gradient-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 text-shadow">مميزات اللعبة</h2>
          <p className="text-xl text-white/90">اكتشف ما يجعل {import.meta.env.VITE_APP_NAME} اللعبة الأفضل</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="bg-white/10 backdrop-blur border-white/20 hover-scale hover:bg-white/20 transition-all duration-300"
              >
                <CardContent className="p-6 text-center text-white">
                  <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-white/80">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
