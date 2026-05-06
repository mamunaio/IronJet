import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IRONJET | Premium Gym & Fitness Experience",
  description: "Shape your legacy with IronJet. Premium equipment, expert trainers, and a world-class fitness environment.",
};

import SmoothScroll from "@/components/SmoothScroll";

import Loader from "@/components/Loader";
import ThemeToggle from "@/components/ThemeToggle";
import MemberHub from "@/components/MemberHub";
import BackToTop from "@/components/BackToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Loader />
        <ThemeToggle />
        <MemberHub />
        <BackToTop />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
