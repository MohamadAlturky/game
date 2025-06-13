
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Book, Atom, Computer, Palette, Trophy, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "جغرافيا",
    icon: Globe,
    description: "أسئلة عن البلدان والعواصم والمعالم الجغرافية",
    questionsCount: 150,
    color: "bg-blue-500"
  },
  {
    id: 2,
    name: "أدب",
    icon: Book,
    description: "الشعر والنثر والأدباء والمؤلفات الكلاسيكية",
    questionsCount: 120,
    color: "bg-green-500"
  },
  {
    id: 3,
    name: "علوم",
    icon: Atom,
    description: "الفيزياء والكيمياء والأحياء والاكتشافات العلمية",
    questionsCount: 200,
    color: "bg-purple-500"
  },
  {
    id: 4,
    name: "تكنولوجيا",
    icon: Computer,
    description: "الحاسوب والإنترنت والتقنيات الحديثة",
    questionsCount: 90,
    color: "bg-orange-500"
  },
  {
    id: 5,
    name: "فنون",
    icon: Palette,
    description: "الرسم والموسيقى والمسرح والسينما",
    questionsCount: 80,
    color: "bg-pink-500"
  },
  {
    id: 6,
    name: "رياضة",
    icon: Trophy,
    description: "كرة القدم والألعاب الأولمبية والرياضات المختلفة",
    questionsCount: 110,
    color: "bg-red-500"
  }
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              فئات الأسئلة
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اختر الفئة المفضلة لديك وابدأ التحدي! لدينا مجموعة متنوعة من الأسئلة في كل فئة
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categories.map((category) => (
              <Card key={category.id} className="card-shadow hover-scale fade-in">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-800">
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">
                      {category.questionsCount} سؤال متاح
                    </span>
                  </div>
                  <Button className="gradient-button text-white w-full hover-scale">
                    ابدأ التحدي
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="card-shadow max-w-2xl mx-auto">
              <CardContent className="p-8">
                <Users className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  جاهز للتحدي؟
                </h3>
                <p className="text-gray-600 mb-6">
                  ادع أصدقاءك وابدأوا لعبة جماعية ممتعة ومفيدة
                </p>
                <Link to="/game">
                  <Button className="gradient-button text-white px-8 py-3 text-lg hover-scale">
                    ابدأ اللعب الآن
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Categories;
