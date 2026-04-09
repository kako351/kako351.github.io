import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "kako351 | Mobile Engineer、時々コーヒー焙煎士",
  description: "人の生活を豊かにする。モバイルエンジニア、時々コーヒー焙煎士。",
  robots: {
    index: false,
    nocache: true,
  },
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QN8RDXYSQ7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-QN8RDXYSQ7');`}
        </Script>
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
