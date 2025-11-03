import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
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
          <h1 className="text-3xl font-bold text-foreground mb-6 text-balance">سياسة الخصوصية</h1>

          <div className="space-y-6 text-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. المعلومات التي نجمعها</h2>
              <p className="text-muted-foreground mb-2">نقوم بجمع المعلومات التالية:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
                <li>المعلومات الشخصية (الاسم، العنوان، رقم الهاتف، البريد الإلكتروني)</li>
                <li>معلومات السيارة (رقم اللوحة، نوع السيارة، سنة الصنع)</li>
                <li>معلومات رخصة القيادة</li>
                <li>السجل القيادي والمطالبات السابقة</li>
                <li>معلومات الدفع</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. كيفية استخدام المعلومات</h2>
              <p className="text-muted-foreground mb-2">نستخدم معلوماتك للأغراض التالية:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
                <li>معالجة طلبات التأمين وإصدار الوثائق</li>
                <li>تقييم المخاطر وتحديد الأقساط</li>
                <li>معالجة المطالبات</li>
                <li>التواصل معك بخصوص وثيقتك</li>
                <li>تحسين خدماتنا</li>
                <li>الامتثال للمتطلبات القانونية والتنظيمية</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. مشاركة المعلومات</h2>
              <p className="text-muted-foreground">لا نبيع معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك مع:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4 mt-2">
                <li>شركات التأمين وإعادة التأمين</li>
                <li>مقدمي الخدمات (مثل معالجي الدفع)</li>
                <li>الجهات التنظيمية والحكومية عند الطلب</li>
                <li>المحامين والمحاسبين عند الضرورة</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. أمن المعلومات</h2>
              <p className="text-muted-foreground">
                نستخدم تدابير أمنية متقدمة لحماية معلوماتك، بما في ذلك التشفير وجدران الحماية والوصول المحدود. جميع
                البيانات المالية تتم معالجتها عبر بوابات دفع آمنة ومعتمدة.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. ملفات تعريف الارتباط (Cookies)</h2>
              <p className="text-muted-foreground">
                نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. يمكنك التحكم في ملفات تعريف الارتباط من خلال
                إعدادات المتصفح الخاص بك.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. حقوقك</h2>
              <p className="text-muted-foreground mb-2">لديك الحق في:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
                <li>الوصول إلى معلوماتك الشخصية</li>
                <li>تصحيح المعلومات غير الدقيقة</li>
                <li>طلب حذف معلوماتك (مع مراعاة الالتزامات القانونية)</li>
                <li>الاعتراض على معالجة معلوماتك</li>
                <li>طلب نقل بياناتك</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. الاحتفاظ بالبيانات</h2>
              <p className="text-muted-foreground">
                نحتفظ بمعلوماتك طالما كانت وثيقتك سارية ولمدة 10 سنوات بعد انتهائها، وفقاً للمتطلبات التنظيمية.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. الامتثال لإعلانات جوجل</h2>
              <p className="text-muted-foreground">
                نلتزم بسياسات إعلانات جوجل ونضمن الشفافية الكاملة في جمع البيانات واستخدامها. لا نستخدم معلوماتك لأغراض
                إعلانية دون موافقتك الصريحة.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">9. التواصل معنا</h2>
              <p className="text-muted-foreground">
                لأي استفسارات بخصوص سياسة الخصوصية، يرجى التواصل معنا عبر البريد الإلكتروني أو الهاتف.
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
