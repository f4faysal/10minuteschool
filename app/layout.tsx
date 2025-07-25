import type { Metadata, ResolvingMetadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";

import "./globals.css";
import { ThemeProvider } from "@/components/theme/provider";
import { getIeltsCourse } from "@/lib/action/ielts-course.action";

// import { Toaster } from "@/components/ui/toaster";

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

type Props = {
  params: Promise<{ lang: "en" | "bn" }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = (await params).lang || "en";
  const productData = await getIeltsCourse(lang);

  if (!productData) {
    return {
      title: "Course Not Found",
      description: "The requested course could not be found.",
    };
  }

  const { seo } = productData.data;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.defaultMeta.find((m) => m.value === "og:title")?.content,
      description: seo.defaultMeta.find((m) => m.value === "og:description")
        ?.content,
      url: seo.defaultMeta.find((m) => m.value === "og:url")?.content,
      siteName: "10 Minute School",
      images: [
        {
          url:
            seo.defaultMeta.find((m) => m.value === "og:image")?.content || "",
          width: 1200,
          height: 630,
          alt: seo.defaultMeta.find((m) => m.value === "og:image:alt")?.content,
        },
      ],
      locale: lang === "en" ? "en_US" : "bn_BD",
      type: "website",
    },
  };
}

const RootLayout = async ({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: "en" | "bn" }>;
}) => {
  const resolvedParams = await params;
  return (
    <html lang={resolvedParams.lang} suppressHydrationWarning>
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
