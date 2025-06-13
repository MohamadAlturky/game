import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Categories list (reuse from CategoriesSection)
import {
  Globe, Trophy, Palette, BookOpen, Landmark, Stethoscope, Calculator, Atom, Gamepad2, Utensils, Car, Music, Plane, Heart, Cpu, Rocket, PawPrint, Languages, Banknote, Film, Bell
} from "lucide-react";

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
  { id: 15, name: "التكنولوجيا", icon: Cpu, color: "bg-emerald-500", description: "الحاسوب والإنترنت" },
  { id: 16, name: "الفضاء", icon: Rocket, color: "bg-slate-500", description: "الكواكب والنجوم والفضاء الخارجي" },
  { id: 17, name: "الحيوانات", icon: PawPrint, color: "bg-lime-500", description: "الحيوانات البرية والبحرية" },
  { id: 18, name: "اللغات", icon: Languages, color: "bg-cyan-500", description: "اللغات العالمية والترجمة" },
  { id: 19, name: "الاقتصاد", icon: Banknote, color: "bg-fuchsia-500", description: "الأسواق والمال والأعمال" },
  { id: 20, name: "السينما", icon: Film, color: "bg-zinc-500", description: "الأفلام والممثلين والمخرجين" }
];

const CreateGame = () => {
  const navigate = useNavigate();
  const [gameType, setGameType] = useState<"categories" | "bell" | null>("categories");
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [gameName, setGameName] = useState("");
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");

  const toggleCategory = (id: number) => {
    setSelectedCategories((prev) =>
      prev.includes(id)
        ? prev.filter((catId) => catId !== id)
        : prev.length < 6
          ? [...prev, id]
          : prev
    );
  };

  const isFormValid = gameType === "bell"
    ? gameName.trim() !== "" && team1.trim() !== "" && team2.trim() !== ""
    : selectedCategories.length === 6 && gameName.trim() !== "" && team1.trim() !== "" && team2.trim() !== "";

  const handleStart = () => {
    // Clear any existing game state from localStorage
    localStorage.clear();
    
    navigate("/game-board", {
      state: {
        gameType,
        categories: selectedCategories,
        gameName,
        teams: [team1, team2],
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 py-10">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">إنشاء لعبة جديدة</h1>

          {/* Game Type Selection */}
          {!gameType && (
            <section className="mb-10">
              <h2 className="text-xl font-semibold mb-4 text-right">اختر نوع اللعبة</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card
                  className="cursor-pointer border-2 hover:border-primary transition-all duration-200"
                  onClick={() => setGameType("categories")}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <div className="font-semibold text-xl mb-2">فئات</div>
                    <div className="text-gray-600">اختر 6 فئات مختلفة للعب</div>
                  </CardContent>
                </Card>
                <Card
                  className="cursor-pointer border-2 hover:border-primary transition-all duration-200"
                  onClick={() => navigate("/ring-game")}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Bell className="w-8 h-8 text-white" />
                    </div>
                    <div className="font-semibold text-xl mb-2">الجرس</div>
                    <div className="text-gray-600">العب بنظام الجرس</div>
                  </CardContent>
                </Card>
              </div>
            </section>
          )}

          {/* Categories Selection - Only show if game type is categories */}
          {gameType === "categories" && (
            <>

              <section className="mb-10">
                <h2 className="text-xl font-semibold mb-4 text-right">اختر 6 فئات</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    const selected = selectedCategories.includes(cat.id);
                    return (
                      <Card
                        key={cat.id}
                        className={`cursor-pointer border-2 transition-all duration-200 ${selected ? "border-primary ring-2 ring-primary" : "border-gray-200 hover:border-primary"
                          }`}
                        onClick={() => toggleCategory(cat.id)}
                      >
                        <CardContent className="p-4 text-center">
                          <div className={`w-12 h-12 ${cat.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="font-semibold mb-1">{cat.name}</div>
                          <div className="text-xs text-gray-500">{cat.description}</div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
                <div className="text-sm text-gray-600 mt-2 text-right">
                  {selectedCategories.length} / 6 فئات مختارة
                </div>
              </section>
              <section className="mb-8">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="gameName">اسم اللعبة</Label>
                    <Input
                      id="gameName"
                      value={gameName}
                      onChange={(e) => setGameName(e.target.value)}
                      placeholder="أدخل اسم اللعبة"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="team1">اسم الفريق الأول</Label>
                    <Input
                      id="team1"
                      value={team1}
                      onChange={(e) => setTeam1(e.target.value)}
                      placeholder="الفريق الأول"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="team2">اسم الفريق الثاني</Label>
                    <Input
                      id="team2"
                      value={team2}
                      onChange={(e) => setTeam2(e.target.value)}
                      placeholder="الفريق الثاني"
                      className="mt-1"
                    />
                  </div>
                </div>
              </section>
            </>
          )}

          <div className="flex gap-4">
            {gameType && (
              <>
                <Button
                  variant="outline"
                  className="w-full py-3 text-lg"
                  onClick={() => setGameType(null)}
                >
                  العودة
                </Button>
                <Button
                  className="w-full py-3 text-lg gradient-button text-white border-0"
                  disabled={!isFormValid}
                  onClick={handleStart}
                >
                  ابدأ اللعب
                </Button>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreateGame; 