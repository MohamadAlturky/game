import { Card, CardContent } from "@/components/ui/card";
import { 
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
  Cpu
} from "lucide-react";

const CategoriesSection = () => {
  const categories = [
    { id: 1, name: "الجغرافيا", icon: Globe, color: "bg-blue-500", description: "دول وعواصم وقارات" },
    { id: 2, name: "الرياضة", icon: Trophy, color: "bg-green-500", description: "كرة القدم والألعاب الأولمبية" },
    { id: 3, name: "الفن", icon: Palette, color: "bg-purple-500", description: "الرسم والنحت والفنون" },
    { id: 4, name: "الأدب", icon: BookOpen, color: "bg-red-500", description: "الشعر والرواية والكتب" },
    { id: 5, name: "التاريخ", icon: Landmark, color: "bg-yellow-500", description: "الحضارات والأحداث التاريخية" },
    { id: 6, name: "الطب", icon: Stethoscope, color: "bg-pink-500", description: "الصحة والطب والعلاج" },
    { id: 7, name: "الرياضيات", icon: Calculator, color: "bg-indigo-500", description: "الأرقام والمعادلات" },
    { id: 8, name: "العلوم", icon: Atom, color: "bg-teal-500", description: "الفيزياء والكيمياء والأحياء" },
    { id: 9, name: "الألعاب", icon: Gamepad2, color: "bg-orange-500", description: "ألعاب الفيديو والتسلية" },
    { id: 10, name: "الطبخ", icon: Utensils, color: "bg-amber-500", description: "الوصفات والمأكولات" },
    { id: 11, name: "السيارات", icon: Car, color: "bg-gray-500", description: "السيارات والمحركات" },
    { id: 12, name: "الموسيقى", icon: Music, color: "bg-violet-500", description: "الأغاني والآلات الموسيقية" },
    { id: 13, name: "السفر", icon: Plane, color: "bg-sky-500", description: "السياحة والسفر" },
    { id: 14, name: "الحب والعلاقات", icon: Heart, color: "bg-rose-500", description: "العلاقات الإنسانية" },
    { id: 15, name: "التكنولوجيا", icon: Cpu, color: "bg-emerald-500", description: "الحاسوب والإنترنت" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">الفئات المتاحة</h2>
          <p className="text-xl text-gray-600">اختر من بين مجموعة متنوعة من المواضيع المثيرة</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className="hover-scale cursor-pointer card-shadow border-0 bg-white hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
