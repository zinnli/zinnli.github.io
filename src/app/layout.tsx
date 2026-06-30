import type { Metadata, Viewport } from "next";
import { Footer, Header } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "zinnli.dev",
  description: "배운 것을 기록하는 개발 블로그입니다.",
  openGraph: {
    title: "zinnli.dev",
    type: "website",
    url: "https://zinnli.github.io/",
    siteName: "zinnli.dev",
    images: [
      {
        url: "https://zinnli.github.io/og_image.png",
        width: 800,
        height: 400,
        alt: "zinnli.dev",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="ko" className="bg-gray_bg">
      <head>
        <meta
          name="google-site-verification"
          content="dwXMJrRDyk5PeTksqAXirxdZvZ77pohP_OFF7-bIl74"
        />
        <link
          href="http://cdn.jsdelivr.net/gh/joungkyun/font-d2coding/d2coding.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body className="flex min-h-screen flex-col items-center bg-gray_bg">
        <main className="flex w-full max-w-[800px] flex-1 flex-col items-center px-7">
          <Header />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
