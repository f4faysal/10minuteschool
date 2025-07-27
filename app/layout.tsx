import localFont from "next/font/local";
import { ReactNode } from "react";

import "./globals.css";

import { ThemeProvider } from "@/components/theme/provider";

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

const RootLayout = async ({
  children,
  params,
}: {
  children: ReactNode;
  params?: Promise<{ lang: "en" | "bn" }>;
}) => {
  const lang = params ? (await params).lang : undefined;
  const language = lang || "en";
  return (
    <html lang={language} suppressHydrationWarning>
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
      </body>
    </html>
  );
};

export default RootLayout;
