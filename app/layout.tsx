import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AppProvider } from "@/context/app.context";
import { mergeOpenGraph } from "@/utils/mergeOpenGraph";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://hoaxinhchoem.io.vn"),
  openGraph: mergeOpenGraph(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/favicon.png" sizes="32x32" />
        <link rel="icon" href="/img/favicon.png" type="image/svg+xml" />
        {/* <script src="https://codepen.io/shshaw/pen/QmZYMG.js"></script> */}
      </head>
      <body className={inter.className}>
        <section className="">
          <Header />

          <div className="w-full min-h-[500px]">{children}</div>
          <Footer />
        </section>
      </body>
    </html>
  );
}
