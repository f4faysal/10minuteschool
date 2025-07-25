import type { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";

import "./globals.css";
// import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 700 800 900",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 700",
});

export const metadata: Metadata = {
  title: "10 Minute School",
  description:
    "A platform for learning and sharing knowledge. Join us to explore a wide range of educational resources and connect with a community of learners.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {/* <Toaster /> */}
      </body>
    </html>
  );
};

export default RootLayout;
