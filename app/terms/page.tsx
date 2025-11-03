import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
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
          <h1 className="text-3xl font-bold text-foreground mb-6 text-balance">الشروط والأحكام</h1>

          <div className="space-y-6 text-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. القبول بالشروط</h2>
              <p className="text-muted-foreground">
                باستخدامك لخدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه
                الشروط، يرجى عدم استخدام خدماتنا.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. الخدمات المقدمة</h2>
              <p className="text-muted-foreground">
                نحن نقدم خدمات تأمين السيارات الشاملة والتأمين ضد الغير. جميع وثائق التأمين تخضع للشروط والأحكام الخاصة
                بكل وثيقة.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. الأهلية</h2>
              <p className="text-muted-foreground">
                يجب أن يكون عمر المتقدم للحصول على التأمين 18 عاماً على الأقل وأن يكون حاملاً لرخصة قيادة سارية المفعول.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. الأقساط والدفع</h2>
              <p className="text-muted-foreground">
                يجب دفع أقساط التأمين في المواعيد المحددة. عدم الدفع قد يؤدي إلى إلغاء الوثيقة. نحن نقبل الدفع عبر
                البطاقات الائتمانية والتحويل البنكي.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. المطالبات</h2>
              <p className="text-muted-foreground">
                يجب الإبلاغ عن أي حادث خلال 24 ساعة. جميع المطالبات تخضع للتحقيق والموافقة وفقاً لشروط الوثيقة.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. الإلغاء والاسترداد</h2>
              <p className="text-muted-foreground">
                يمكن إلغاء الوثيقة خلال 15 يوماً من تاريخ الإصدار مع استرداد كامل المبلغ. بعد ذلك، يتم احتساب رسوم
                الإلغاء وفقاً للشروط.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. القانون الحاكم</h2>
              <p className="text-muted-foreground">
                تخضع هذه الشروط والأحكام لقوانين المملكة العربية السعودية ولوائح البنك المركزي السعودي.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. التعديلات</h2>
              <p className="text-muted-foreground">
                نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إخطار العملاء بأي تغييرات جوهرية.
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
