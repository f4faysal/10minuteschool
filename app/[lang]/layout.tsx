import type React from "react";
import type { ResolvingMetadata, Metadata } from "next";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { getIeltsCourse } from "@/lib/action/ielts-course.action";
import { generateStructuredData, getMetaContent } from "@/lib/seo";

type Props = {
  params: Promise<{ lang: "en" | "bn" }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = (await params).lang || "en";

  try {
    const productData = await getIeltsCourse(lang);

    if (!productData?.data?.seo) {
      return {
        title: lang === "en" ? "10 Minute School" : "১০ মিনিট স্কুল",
        description:
          lang === "en"
            ? "Bangladesh's largest online learning platform"
            : "বাংলাদেশের সবচেয়ে বড় অনলাইন শিক্ষা প্ল্যাটফর্ম",
      };
    }

    const { seo } = productData.data;
    const { defaultMeta, title, description, keywords, schema } = seo;

    const ogTitle = getMetaContent(defaultMeta, "og:title");
    const ogDescription = getMetaContent(defaultMeta, "og:description");
    const ogImage = getMetaContent(defaultMeta, "og:image");
    const ogImageSecure = getMetaContent(defaultMeta, "og:image:secure_url");
    const ogImageAlt = getMetaContent(defaultMeta, "og:image:alt");
    const ogUrl = getMetaContent(defaultMeta, "og:url");
    const ogType = getMetaContent(defaultMeta, "og:type");
    const ogLocale = getMetaContent(defaultMeta, "og:locale");

    const previousImages = (await parent).openGraph?.images || [];

    const validOgTypes = [
      "website",
      "article",
      "book",
      "profile",
      "music.song",
      "music.album",
      "music.playlist",
      "music.radio_station",
      "video.movie",
      "video.episode",
      "video.tv_show",
      "video.other",
    ];
    const validatedOgType =
      ogType && validOgTypes.includes(ogType) ? ogType : "website";

    const metadata: Metadata = {
      title,
      description,
      keywords: Array.isArray(keywords) ? keywords.join(", ") : keywords,

      openGraph: {
        title: ogTitle || title,
        description: ogDescription || description,
        url: ogUrl,
        siteName: "10 Minute School",
        type: validatedOgType as any,
        locale: ogLocale || (lang === "en" ? "en_US" : "bn_BD"),
        images: [
          {
            url: ogImageSecure || ogImage || "",
            width: 1200,
            height: 630,
            alt: ogImageAlt || title,
            type: "image/png",
          },
          ...previousImages,
        ],
      },

      twitter: {
        card: "summary_large_image",
        title: ogTitle || title,
        description: ogDescription || description,
        images: [ogImageSecure || ogImage || ""],
        site: "@10minuteschool",
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      alternates: {
        canonical: ogUrl,
        languages: {
          "en-US": ogUrl?.replace("/bn/", "/en/") || "",
          "bn-BD": ogUrl?.replace("/en/", "/bn/") || "",
        },
      },
      other: {
        "theme-color": "#1a73e8",
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "default",
        "format-detection": "telephone=no",
      },
    };

    return metadata;
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: lang === "en" ? "10 Minute School" : "১০ মিনিট স্কুল",
      description:
        lang === "en"
          ? "Bangladesh's largest online learning platform"
          : "বাংলাদেশের সবচেয়ে বড় অনলাইন শিক্ষা প্ল্যাটফর্ম",
    };
  }
}

export default async function WebLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "bn" }>;
}) {
  const lang = (await params).lang || "en";

  let structuredData: any[] = [];
  try {
    const productData = await getIeltsCourse(lang);
    if (productData?.data?.seo?.schema) {
      structuredData = generateStructuredData(productData.data.seo.schema);
    }
  } catch (error) {
    console.error("Error loading structured data:", error);
  }

  return (
    <>
      {structuredData.length > 0 && (
        <>
          {structuredData.map((data, index) => (
            <script
              key={index}
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(data),
              }}
            />
          ))}
        </>
      )}

      <main>
        <Navbar lang={lang} />
        {children}
        <Footer />
      </main>
    </>
  );
}
