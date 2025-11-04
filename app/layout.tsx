"use client";

import type React from "react";
import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        {/* Google Tag Manager */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-10860808864"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10860808864');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
