import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, MessageCircle, Mail, Phone, BookOpen, Users, Trophy } from "lucide-react";

const faqs = [
  {
    question: "كيف أبدأ لعبة جديدة؟",
    answer: "يمكنك بدء لعبة جديدة من خلال الضغط على زر 'ابدأ اللعب' في الصفحة الرئيسية. اختر عدد الفرق وأسماء اللاعبين ثم ابدأ الاستمتاع!"
  },
  {
    question: "كيف يتم احتساب النقاط؟",
    answer: "يحصل الفريق على نقطة واحدة لكل إجابة صحيحة. في حالة إجابة كلا الفريقين بشكل صحيح، يحصل كل فريق على نقطة. وفي حالة عدم إجابة أي فريق، لا يحصل أحد على نقاط."
  },
  {
    question: "هل يمكنني اللعب بمفردي؟",
    answer: "نعم! يمكنك اللعب بمفردك عبر اختيار وضع اللاعب الواحد، أو يمكنك دعوة أصدقائك للعب معك في وضع الفرق."
  },
  {
    question: "كم عدد الأسئلة المتاحة؟",
    answer: "لدينا أكثر من 1000 سؤال في فئات مختلفة مثل التاريخ والجغرافيا والعلوم والأدب والرياضة والتكنولوجيا."
  },
  {
    question: "هل التطبيق مجاني؟",
    answer: "نعم، التطبيق مجاني بالكامل ويمكنك الاستمتاع بجميع الميزات دون أي رسوم."
  },
  {
    question: "كيف يمكنني الإبلاغ عن خطأ في سؤال؟",
    answer: "يمكنك التواصل معنا عبر البريد الإلكتروني أو نموذج الاتصال في صفحة المساعدة للإبلاغ عن أي أخطاء."
  }
];

const features = [
  {
    icon: Users,
    title: "اللعب الجماعي",
    description: "استمتع باللعب مع الأصدقاء والعائلة"
  },
  {
    icon: Trophy,
    title: "نظام النقاط",
    description: "تتبع نقاطك وقارن أداءك مع الآخرين"
  },
  {
    icon: BookOpen,
    title: "فئات متنوعة",
    description: "أسئلة في مختلف المجالات والتخصصات"
  }
];

const Help = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <HelpCircle className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              المساعدة والدعم
            </h1>
            <p className="text-xl text-gray-600">
              نحن هنا لمساعدتك في الاستمتاع بأفضل تجربة لعب
            </p>
          </div>

          {/* Features Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="card-shadow fade-in text-center">
                <CardContent className="p-6">
                  <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <Card className="card-shadow mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-center">الأسئلة الشائعة</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-right">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-2xl text-center">تواصل معنا</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-4">
                  <Mail className="w-12 h-12 text-primary mx-auto" />
                  <h3 className="font-bold text-gray-800">البريد الإلكتروني</h3>
                  <p className="text-gray-600">support@seengeem.com</p>
                  <Button variant="outline" className="w-full">
                    راسلنا
                  </Button>
                </div>

                <div className="space-y-4">
                  <MessageCircle className="w-12 h-12 text-primary mx-auto" />
                  <h3 className="font-bold text-gray-800">الدردشة المباشرة</h3>
                  <p className="text-gray-600">متاح 24/7</p>
                  <Button variant="outline" className="w-full">
                    ابدأ الدردشة
                  </Button>
                </div>

                <div className="space-y-4">
                  <Phone className="w-12 h-12 text-primary mx-auto" />
                  <h3 className="font-bold text-gray-800">الهاتف</h3>
                  <p className="text-gray-600">+966 11 123 4567</p>
                  <Button variant="outline" className="w-full">
                    اتصل بنا
                  </Button>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Badge variant="secondary" className="text-sm">
                  نعمل على الرد خلال 24 ساعة
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Help;
