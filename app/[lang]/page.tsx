import { getIeltsCourse } from "@/lib/action/ielts-course.action";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ lang: "en" | "bn" }>;
}) {
  const lang = (await params).lang || "en";
  const productData = await getIeltsCourse(lang);

  if (!productData) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        Failed to load course data.
      </div>
    );
  }

  const { data } = productData;

  const getSection = (type: string): Section | undefined => {
    return data.sections.find((section) => section.type === type);
  };

  const instructorsSection = getSection("instructors");
  const featuresSection = getSection("features");
  const pointersSection = getSection("pointers");
  const exclusiveFeaturesSection = getSection("feature_explanations");
  const aboutSection = getSection("about");

  return (
    <main className="container mx-auto px-4 py-8 lg:py-12">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-700 mb-6">{data.description}</p>

      {instructorsSection && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Instructors</h2>
          {/* Render instructors content */}
        </section>
      )}

      {featuresSection && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          {/* Render features content */}
        </section>
      )}

      {pointersSection && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Pointers</h2>
          {/* Render pointers content */}
        </section>
      )}

      {exclusiveFeaturesSection && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Exclusive Features</h2>
          {/* Render exclusive features content */}
        </section>
      )}

      {aboutSection && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">About the Course</h2>
          {/* Render about section content */}
        </section>
      )}
    </main>
  );
}
