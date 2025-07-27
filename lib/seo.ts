export interface SEOData {
  defaultMeta: Array<{
    content: string;
    type: string;
    value: string;
  }>;
  description: string;
  keywords: string[] | string;
  schema: Array<{
    meta_name: string;
    meta_value: string;
    type: string;
  }>;
  title: string;
}

export function getMetaContent(
  defaultMeta: SEOData["defaultMeta"],
  value: string
): string | undefined {
  return defaultMeta.find((meta) => meta.value === value)?.content;
}

export function generateStructuredData(schema: SEOData["schema"]) {
  return schema
    .filter((item) => item.meta_value && item.meta_value.trim() !== "")
    .map((item) => {
      try {
        return JSON.parse(item.meta_value);
      } catch (error) {
        console.error("Invalid JSON in schema:", error);
        return null;
      }
    })
    .filter(Boolean);
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "10 Minute School",
    url: "https://10minuteschool.com",
    logo: "https://cdn.10minuteschool.com/images/logo.png",
    sameAs: [
      "https://www.facebook.com/10minuteschoolbd",
      "https://www.youtube.com/c/10MinuteSchool",
      "https://www.instagram.com/10minuteschool",
    ],
  };
}
