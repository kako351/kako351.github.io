import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "kako351 | Mobile Engineer、時々コーヒー焙煎士",
  description: "人の生活を豊かにする。モバイルエンジニア、時々コーヒー焙煎士。",
  openGraph: {
    title: "kako351 | Mobile Engineer、時々コーヒー焙煎士",
    description: "人の生活を豊かにする。モバイルエンジニア、時々コーヒー焙煎士。",
    url: "https://portfolio.kako351.dev/",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@kako_351",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="antialiased">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
