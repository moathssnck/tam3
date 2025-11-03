import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowRight className="w-4 h-4 ml-2" />
            العودة للرئيسية
          </Button>
        </Link>

        <Card className="p-8">
          <h1 className="text-3xl font-bold text-foreground mb-6 text-balance">إخلاء المسؤولية</h1>

          <div className="space-y-6 text-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. المعلومات العامة</h2>
              <p className="text-muted-foreground">
                المعلومات المقدمة على هذا الموقع هي لأغراض إعلامية عامة فقط. بينما نسعى للحفاظ على دقة المعلومات، لا
                نقدم أي ضمانات أو تعهدات من أي نوع، صريحة أو ضمنية، حول اكتمال أو دقة أو موثوقية أو ملاءمة أو توفر
                الموقع أو المعلومات.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. عروض الأسعار</h2>
              <p className="text-muted-foreground">
                جميع عروض الأسعار المقدمة هي تقديرية وتخضع للتغيير بناءً على التقييم الكامل للمخاطر. السعر النهائي قد
                يختلف بناءً على المعلومات المقدمة والتحقق منها.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. التغطية التأمينية</h2>
              <p className="text-muted-foreground">
                تفاصيل التغطية التأمينية المذكورة هي ملخصات عامة. للحصول على التفاصيل الكاملة، يرجى الرجوع إلى وثيقة
                التأمين الفعلية. في حالة وجود أي تعارض، تسود شروط الوثيقة.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. المسؤولية المحدودة</h2>
              <p className="text-muted-foreground">
                لن نكون مسؤولين عن أي خسارة أو ضرر، بما في ذلك على سبيل المثال لا الحصر، الخسارة أو الضرر غير المباشر أو
                التبعي، أو أي خسارة أو ضرر ناتج عن فقدان البيانات أو الأرباح الناشئة عن أو فيما يتعلق باستخدام هذا
                الموقع.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. الروابط الخارجية</h2>
              <p className="text-muted-foreground">
                قد يحتوي موقعنا على روابط لمواقع خارجية. ليس لدينا أي سيطرة على محتوى وطبيعة هذه المواقع ولا نتحمل أي
                مسؤولية عنها.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. التوفر</h2>
              <p className="text-muted-foreground">
                نسعى للحفاظ على توفر الموقع على مدار الساعة، لكننا لا نضمن أن الموقع سيكون متاحاً دائماً أو خالياً من
                الأخطاء. قد نقوم بتعليق أو سحب أو تقييد توفر الموقع دون إشعار مسبق.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. المشورة المهنية</h2>
              <p className="text-muted-foreground">
                المعلومات المقدمة لا تشكل مشورة مهنية. يجب عليك استشارة مستشار مالي أو قانوني مؤهل قبل اتخاذ أي قرارات
                بناءً على المعلومات المقدمة.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. التنظيم والترخيص</h2>
              <p className="text-muted-foreground">
                نحن مرخصون ومنظمون من قبل البنك المركزي السعودي. جميع خدماتنا تخضع للوائح والقوانين المعمول بها في
                المملكة العربية السعودية.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">9. التحديثات</h2>
              <p className="text-muted-foreground">
                نحتفظ بالحق في تحديث أو تغيير هذا الإخلاء من المسؤولية في أي وقت دون إشعار مسبق. استمرارك في استخدام
                الموقع بعد أي تغييرات يشكل قبولاً لتلك التغييرات.
              </p>
            </section>

            <section className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">آخر تحديث: يناير 2025</p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  )
}
