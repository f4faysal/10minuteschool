"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react"; // You can replace with any icon or inline SVG

interface CourseDetailsSectionProps {
  section: Section;
}

export default function CourseDetailsSection({
  section,
}: CourseDetailsSectionProps) {
  const aboutItems = section.values as About[];
  const [openItem, setOpenItem] = useState<string | null>(
    aboutItems[0]?.id || null
  );

  const toggleItem = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-slate-900">{section.name}</h2>

      <div className="space-y-2 p-4 border rounded-md">
        {aboutItems.map((item) => {
          const isOpen = openItem === item.id;
          return (
            <div
              key={item.id}
              className="border-b border-dashed border-slate-300 overflow-hidden transition-all"
            >
              {/* Trigger/Header */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex justify-between items-center p-4 text-left font-semibold text-md md:text-base text-slate-900 focus:outline-none"
              >
                <span
                  dangerouslySetInnerHTML={{ __html: item.title }}
                  className="prose"
                />
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Content */}
              <div
                className={`transition-all duration-300 px-4 overflow-hidden text-sm text-slate-700 ${
                  isOpen ? "max-h-[1000px] pb-4" : "max-h-0"
                }`}
              >
                <div
                  className="[&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-1 prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
