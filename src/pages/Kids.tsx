import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Kids = () => {
  const ageGroups = [
    {
      title: "6 - 8 سنوات",
      categories: [
        { name: "الرياضيات", icon: "🔢", color: "bg-blue-500" },
        { name: "علوم ومعرفة", icon: "🧪", color: "bg-green-500" },
        { name: "ضرب ومعسكر", icon: "✖️", color: "bg-red-500" },
        { name: "القرآن الكريم", icon: "📖", color: "bg-purple-500" },
        { name: "بطاقة", icon: "🎴", color: "bg-yellow-500" },
        { name: "علوم", icon: "🔬", color: "bg-indigo-500" },
        { name: "لغة", icon: "📚", color: "bg-pink-500" },
        { name: "ABC", icon: "🔤", color: "bg-orange-500" },
        { name: "إسلامي", icon: "🕌", color: "bg-teal-500" }
      ]
    },
    {
      title: "9 - 10 سنوات", 
      categories: [
        { name: "اجتماعيات", icon: "🌍", color: "bg-green-600" },
        { name: "فيزياء وكيمياء", icon: "⚛️", color: "bg-blue-600" },
        { name: "حساب", icon: "🧮", color: "bg-yellow-600" },
        { name: "علوم", icon: "🔬", color: "bg-purple-600" },
        { name: "دين", icon: "🕌", color: "bg-emerald-600" },
        { name: "جميع ونظافة", icon: "📚", color: "bg-rose-600" },
        { name: "English", icon: "🇬🇧", color: "bg-red-600" },
        { name: "عربي", icon: "📝", color: "bg-amber-600" },
        { name: "القرآن الكريم", icon: "📖", color: "bg-violet-600" },
        { name: "ألعاب", icon: "🎮", color: "bg-cyan-600" }
      ]
    },
    {
      title: "6 - 10 سنوات",
      categories: [
        { name: "YouTube", icon: "📺", color: "bg-red-500" },
        { name: "مرافق الجامعة", icon: "⚽", color: "bg-green-500" },
        { name: "أعلام", icon: "🏳️", color: "bg-blue-500" },
        { name: "الشخصيات", icon: "👥", color: "bg-purple-500" },
        { name: "علم الأحياء", icon: "🏆", color: "bg-yellow-500" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-main py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-white rounded-full"></div>
          <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow">
            {import.meta.env.VITE_APP_NAME} للأطفال
          </h1>
          <p className="text-xl text-white/90 mb-8">
            واجهة خاصة بالأطفال.. تحدّي معلوماتهم على حسب أعمارهم
          </p>
          
          {/* Age Selection Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full">
              {import.meta.env.VITE_APP_NAME}
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full">
              ألعاب
            </Button>
            <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full">
              {import.meta.env.VITE_APP_NAME} حديد
            </Button>
          </div>
        </div>
      </section>

      {/* Categories by Age Groups */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            اختر الفئات
          </h2>
          
          {ageGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-16">
              <div className="text-center mb-8">
                <span className="inline-block bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-lg font-semibold">
                  {group.title}
                </span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {group.categories.map((category, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover-scale cursor-pointer"
                  >
                    <div className={`w-16 h-16 ${category.color} rounded-full mx-auto mb-4 flex items-center justify-center text-2xl`}>
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{category.name}</h3>
                    <Button 
                      size="sm" 
                      className="gradient-button text-white border-0 w-full"
                    >
                      ابدأ اللعب
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Setup Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            حدد معلومات الفريق
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">الفريق الأول</h3>
              <Button variant="outline" className="w-full mb-4">
                اسم الفريق
              </Button>
              <div className="flex items-center justify-center gap-4">
                <Button variant="ghost" size="icon" className="rounded-full bg-gray-200">
                  -
                </Button>
                <span className="text-2xl font-bold">1</span>
                <Button variant="ghost" size="icon" className="rounded-full bg-gray-200">
                  +
                </Button>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">الفريق الثاني</h3>
              <Button variant="outline" className="w-full mb-4">
                اسم الفريق
              </Button>
              <div className="flex items-center justify-center gap-4">
                <Button variant="ghost" size="icon" className="rounded-full bg-gray-200">
                  -
                </Button>
                <span className="text-2xl font-bold">1</span>
                <Button variant="ghost" size="icon" className="rounded-full bg-gray-200">
                  +
                </Button>
              </div>
            </div>
          </div>
          
          <Button className="gradient-button text-white px-8 py-3 text-lg">
            ابدأ اللعب
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kids;
