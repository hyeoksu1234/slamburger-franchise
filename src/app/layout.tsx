import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";

const pretendard = localFont({
  src: [
    {
      path: "../fonts/PretendardVariable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-pretendard",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  display: "swap",
  subsets: ["latin"],
});

const tondu = localFont({
  src: "../fonts/Tondu-Beta.ttf",
  variable: "--font-tondu",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SLAMBURGER 가맹 문의",
  description:
    "강력한 한 입의 경험, SLAMBURGER 가맹 안내와 문의를 위한 공식 랜딩 페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.variable} ${montserrat.variable} ${tondu.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
