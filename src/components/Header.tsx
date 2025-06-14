import { Button } from "@/components/ui/button";
import { Menu, User, LogIn, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              عالم المعرفة
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">الرئيسية</Link>
            
            {/* Related Apps Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-primary">
                    التطبيقات ذات الصلة
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <Link 
                        to="/kids" 
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                          👶
                        </div>
                        <div>
                          <h3 className="font-semibold">عالم المعرفة للأطفال</h3>
                          <p className="text-sm text-gray-600">ألعاب تعليمية للأطفال من 6-10 سنوات</p>
                        </div>
                      </Link>
                      
                      <a 
                        href="#" 
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                          🎯
                        </div>
                        <div>
                          <h3 className="font-semibold">عالم المعرفة حديد</h3>
                          <p className="text-sm text-gray-600">تحديات صعبة للمحترفين</p>
                        </div>
                      </a>
                      
                      <a 
                        href="#" 
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
                          🎮
                        </div>
                        <div>
                          <h3 className="font-semibold">ألعاب تفاعلية</h3>
                          <p className="text-sm text-gray-600">ألعاب متنوعة ومسلية</p>
                        </div>
                      </a>
                      
                      <a 
                        href="#" 
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                          📚
                        </div>
                        <div>
                          <h3 className="font-semibold">تعليم تفاعلي</h3>
                          <p className="text-sm text-gray-600">منصة تعليمية شاملة</p>
                        </div>
                      </a>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/categories" className="text-gray-700 hover:text-primary transition-colors">الفئات</Link>
            <Link to="/challenges" className="text-gray-700 hover:text-primary transition-colors">التحديات</Link>
            <Link to="/help" className="text-gray-700 hover:text-primary transition-colors">المساعدة</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
              <User className="w-4 h-4" />
              تسجيل الدخول
            </Button>
            <Button size="sm" className="gradient-button text-white border-0">
              <LogIn className="w-4 h-4 ml-2" />
              إنشاء حساب
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
