import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">بتعرف؟</h3>
            <p className="text-gray-300 mb-4">
              لعبة تحدي المعلومات والثقافة العامة
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">الفئات</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">التحديات</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">المساعدة</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">الدعم</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">اتصل بنا</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">شروط الاستخدام</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 بتعرف؟. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
