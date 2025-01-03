import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MobNavbar, Navbar, Footer } from "@/components";
import { ResumeProvider } from "@/context/ResumeContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "RezuPro",
  description: "Generated by React",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        <ResumeProvider>
          <Navbar />
          <MobNavbar />
          {children}
          <Footer />
        </ResumeProvider>
      </body>
    </html>
  );
}
