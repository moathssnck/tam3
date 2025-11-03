import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "تأمين السيارات - حماية شاملة لسيارتك",
  description:
    "احصل على أفضل عروض تأمين السيارات بأسعار تنافسية. تغطية شاملة وخدمة عملاء متميزة على مدار الساعة.",
  keywords: "تأمين السيارات, تأمين شامل, تأمين ضد الغير, تأمين المركبات",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
