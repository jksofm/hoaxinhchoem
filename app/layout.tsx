import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AppProvider } from "@/context/app.context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hoaxinhchoem",
  description: "Flower Paradise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
