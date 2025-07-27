import Checklist from "@/components/checklist";
import CourseDetailsSection from "@/components/course-details-section";
import EngagementSection from "@/components/engagement-section";
import ExclusiveFeaturesSection from "@/components/exclusive-features-section";
import FAQSection from "@/components/faq-section";
import FeaturesSection from "@/components/features-section";
import FixedHeader from "@/components/fixed-header";
import VideoGallery from "@/components/gallery";
import Hero from "@/components/hero";
import InstructorsSection from "@/components/instructors-section";
import LearningOutcomesSection from "@/components/learning-outcomes-section";
import TestimonialsSection from "@/components/testimonials-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getIeltsCourse } from "@/lib/action/ielts-course.action";
import { MessageCircle } from "lucide-react";
import { section } from "motion/react-client";
import Image from "next/image";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ lang: "en" | "bn" }>;
}) {
  const lang = (await params).lang || "en";
  const productData = await getIeltsCourse(lang);
  if (!productData) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          কোর্স ডেটা লোড করতে ব্যর্থ
        </h1>
        <p className="text-gray-600">দয়া করে পরে আবার চেষ্টা করুন।</p>
      </div>
    );
  }
  const { data } = productData;
  // Sort sections by order_idx
  const sortedSections = data.sections.sort(
    (a, b) => a.order_idx - b.order_idx
  );
  return (
    <div>
      <FixedHeader courseData={productData} />
      <Hero courseData={productData} />
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 md:gap-8 gap-4">
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
                case "free_items":
                  return (
                    // <FreeItemsSection key={section.type} section={section} />
                    <>free_items</>
                  );
                default:
                  return null;
              }
            })}
          </div>
          <div className="md:col-span-1 order-1 md:order-2 md:-mt-[300px]">
            <Checklist courseData={productData} />
          </div>
        </div>
      </section>
    </div>
  );
}
