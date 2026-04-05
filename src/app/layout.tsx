import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "牧牧教練 Mumu Coach | 一對一健身 · 孕婦健身 · 團體課",
  description:
    "專業健身教練牧牧，提供一對一私人健身訓練、孕婦健身指導、小班團體課程。為你量身打造的健身旅程，從這裡開始。",
  keywords: ["私人教練", "一對一健身", "孕婦健身", "健身團體課", "牧牧教練"],
  verification: {
    google: "wIyXrfUtNq0Cnxvc6IRh60FAFwoEPp80pj4Jq-U869Q",
  },
  openGraph: {
    title: "牧牧教練 Mumu Coach",
    description: "專業 · 溫暖 · 為你量身打造的健身旅程",
    type: "website",
    locale: "zh_TW",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${barlow.variable} ${barlowCondensed.variable} ${notoSansTC.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground font-body">
        {children}
      </body>
    </html>
  );
}
