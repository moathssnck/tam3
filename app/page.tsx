import { Card } from "@/components/ui/card";
import { Shield, FileText, Lock, Link2, Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";

const FEATURE_LINKS = [
  {
    title: "احصل على عرض سعر",
    description: "احسب تكلفة التأمين لسيارتك في دقائق",
    icon: Link2,
    href: "https://taminsssss.pages.dev/",
  },
  {
    title: "التأمين الشامل",
    description: "احصل على افضل العروض على التأمين الشامل",
    icon: Link2,
    href: "https://taminsssss.pages.dev/",
  },
  {
    title: "تأمين ضد الغير",
    description: "احصل على افضل العروض على التأمين ضد الغير",
    icon: Link2,
    href: "https://taminsssss.pages.dev/",
  },
];

const LEGAL_LINKS = [
  { title: "الشروط والأحكام", href: "/terms", icon: FileText },
  { title: "سياسة الخصوصية", href: "/privacy", icon: Lock },
  { title: "إخلاء المسؤولية", href: "/disclaimer", icon: Shield },
];

export default function BioLinksPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 relative overflow-hidden text-gray-900"
      style={{ zoom: 0.6 }}
      dir="rtl"
    >
      {/* Floating Background Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl animate-float delay-2000" />
      </div>

      <div className="relative py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-16">
            <div className="flex justify-center mb-6 relative">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-400 rounded-full blur-2xl opacity-40 animate-pulse" />
                <div className="relative border-2 border-blue-400 bg-blue-100 rounded-full p-6 shadow-2xl">
                  <Shield className="w-16 h-16 text-blue-600" />
                </div>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-3">
              تأمين السيارات
            </h1>
            <p className="text-md sm:text-lg text-gray-700 leading-relaxed mb-4">
              حماية شاملة لسيارتك بأفضل الأسعار
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full shadow-sm border border-blue-300">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">
                موثوق من قبل أكثر من 50,000 عميل
              </span>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-6 mb-16">
            {FEATURE_LINKS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className="block group rounded-xl"
                >
                  <Card className="p-8 bg-white rounded-xl backdrop-blur-md border border-blue-200 hover:shadow-lg hover:border-blue-400 transition-all duration-300 cursor-pointer hover:scale-105">
                    <div className="flex items-center gap-6">
                      <div className="bg-blue-500 rounded-xl p-5 shadow-md group-hover:bg-blue-600 transition-colors">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1 text-right">
                        <h3 className="font-bold text-lg text-blue-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Legal Section */}
          <Card className="p-8 bg-white/80 backdrop-blur-md border border-blue-200 mb-16">
            <h3 className="font-bold text-center mb-6 text-blue-900 text-lg">
              المعلومات القانونية
            </h3>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {LEGAL_LINKS.map((link, idx) => (
                <React.Fragment key={idx}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2 font-medium hover:scale-105 transition-transform"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.title}
                  </Link>
                  {idx < LEGAL_LINKS.length - 1 && (
                    <span className="text-gray-400">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </Card>

          {/* Footer */}
          <div className="text-center mt-10 text-sm text-gray-600 space-y-2">
            <p className="font-medium">
              © 2025 تأمين السيارات. جميع الحقوق محفوظة.
            </p>
            <p className="flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-blue-600" />
              مرخص من قبل البنك المركزي السعودي
            </p>
          </div>
        </div>
      </div>

      {/* Floating animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
