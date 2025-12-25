import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nojszewski - DevOps • Programista • Administrator",
  description: "DevOps • Programista • Administrator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} bg-white dark:bg-gray-900 transition-colors`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem storageKey="theme">
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}