import Checklist from "@/components/checklist";
import CourseDetailsSection from "@/components/course-details-section";
import EngagementSection from "@/components/engagement-section";
import ExclusiveFeaturesSection from "@/components/exclusive-features-section";
import FAQSection from "@/components/faq-section";
import FeaturesSection from "@/components/features-section";
import FixedHeader from "@/components/fixed-header";
import Hero from "@/components/hero";
import InstructorsSection from "@/components/instructors-section";
import LearningOutcomesSection from "@/components/learning-outcomes-section";
import TestimonialsSection from "@/components/testimonials-section";
import { getIeltsCourse } from "@/lib/action/ielts-course.action";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ lang: "en" | "bn" }>;
}) {
  const lang = (await params).lang || "en";
  const productData = await getIeltsCourse(lang);
  const { data } = productData as ApiResponse;
  const sortedSections = data.sections?.sort(
    (a, b) => a.order_idx - b.order_idx
  );
  return (
    <div>
      <FixedHeader data={data} />
      <Hero data={data} />
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4">
          <div className="md:col-span-2 order-2 md:order-1 space-y-8">
            {sortedSections.map((section) => {
              switch (section.type) {
                case "instructors":
                  return (
                    <InstructorsSection key={section.type} section={section} />
                  );
                case "features":
                  return (
                    <FeaturesSection key={section.type} section={section} />
                  );
                case "group_join_engagement":
                  return (
                    <EngagementSection key={section.type} section={section} />
                  );
                case "pointers":
                  return (
                    <LearningOutcomesSection
                      key={section.type}
                      section={section}
                    />
                  );
                case "about":
                  return (
                    <CourseDetailsSection
                      key={section.type}
                      section={section}
                    />
                  );
                case "feature_explanations":
                  return (
                    <ExclusiveFeaturesSection
                      key={section.type}
                      section={section}
                    />
                  );
                case "testimonials":
                  return (
                    <TestimonialsSection key={section.type} section={section} />
                  );
                case "faq":
                  return <FAQSection key={section.type} section={section} />;

                default:
                  return null;
              }
            })}
          </div>
          <div className="md:col-span-1 order-1 md:order-2 md:-mt-[300px]">
            <Checklist data={data} />
          </div>
        </div>
      </section>
    </div>
  );
}
