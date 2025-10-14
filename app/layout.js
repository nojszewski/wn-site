import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
// import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: process.env.SITE_TITLE || "Nojszew",
  description: "DevOps • Programista • Administrator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className="bg-[#0b0f12] text-white">
        <Header />
        <main className="pt-20 max-w-4xl mx-auto px-6">{children}</main>
      </body>
    </html>
  )
}

