"use server";

export async function getIeltsCourse(
  lang: "en" | "bn"
): Promise<ApiResponse | null> {
  const API_URL = `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`;

  try {
    const response = await fetch(API_URL, {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        accept: "application/json",
      },
      next: {
        revalidate: 3600, // Revalidate every hour (ISR)
      },
    });

    if (!response.ok) {
      console.error(`API request failed with status ${response.status}`);
      return null;
    }

    const data: ApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch product data:", error);
    return null;
  }
}
