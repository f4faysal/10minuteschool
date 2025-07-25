import { getIeltsCourse } from "@/lib/action/ielts-course.action";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ lang: "en" | "bn" }>;
}) {
  const lang = (await params).lang || "en";
  const courseData = await getIeltsCourse(lang);
  console.log(courseData);
  return (
    <main className="container mx-auto px-4 py-8 lg:py-12">
      <h1 className="text-3xl font-bold mb-4">{courseData?.data.title}</h1>
      <p className="text-gray-700 mb-6">{courseData?.data.description}</p>
    </main>
  );
}
