import { getIeltsCourse } from "@/lib/action/ielts-course.action";
import Image from "next/image";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ lang: "en" | "bn" }>;
}) {
  const lang = (await params).lang || "en";
  const courseData = await getIeltsCourse(lang);
  console.log(courseData);
  return (
    <div className="relative">
      {/* Fixed Header */}
      <section className="bg-neutral-900 text-white fixed top-0 left-0 right-0 z-10 h-16">
        <div className="container mx-auto px-4 flex items-center justify-between h-full">
          <div className="space-y-0.5">
            <h1 className="text-base font-bold font-space-grotesk">
              {courseData?.data.title}
            </h1>
            <div className="flex items-center gap-0.5 cursor-pointer">
              <Image
                src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png"
                alt="Rating"
                width={500}
                height={300}
                className="h-4 w-auto object-contain"
              />
              <p className="text-xs font-medium">
                (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
              </p>
            </div>
          </div>
          <div className=" items-center gap-2 hidden sm:flex">
            <div className="space-y-0.5">
              <span className="flex items-center gap-1 text-sm font-medium text-gray-300">
                <Image
                  src={courseData?.data.checklist[0]?.icon || ""}
                  alt="Participants"
                  width={500}
                  height={300}
                  className="h-4 object-contain bg-white w-fit rounded-full p-0.5"
                />
                <span>{courseData?.data.checklist[0]?.text}</span>
              </span>
              <span className="flex items-center gap-1 justify-end">
                <span className="text-green-500 font-bold text-sm">৳ 3850</span>
                <span className="text-red-400 line-through text-xs font-normal">
                  ৳ 5000
                </span>
              </span>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded-sm hover:bg-green-600 transition-colors">
              {courseData?.data.cta_text.name}
            </button>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="bg-neutral-950 text-white h-[500px]"></section>
      {/* Placeholder for main content */}
      <section className="bg-white h-[500px]"></section>
    </div>
  );
}
