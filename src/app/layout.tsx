import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "kako351 | App Engineer & Coffee Roaster",
  description: "人の生活を豊かにする。アプリエンジニア、時々コーヒー焙煎士。",
  openGraph: {
    title: "kako351 | App Engineer & Coffee Roaster",
    description: "人の生活を豊かにする。アプリエンジニア、時々コーヒー焙煎士。",
    url: "https://kako351.github.io",
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
