"use client";

import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FAQSectionProps {
  section: Section;
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export default function FAQSection({ section }: FAQSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);

  const faqs = section.values as FAQ[];
  const displayedFAQs = showAll ? faqs : faqs.slice(0, 5);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section>
      <h2 className="text-xl font-bold text-slate-900 mb-4">{section.name}</h2>

      <div className="relative mb-20 space-y-2">
        {displayedFAQs.map((faq) => (
          <div
            key={faq.id}
            className="border-b border-dashed cursor-pointer"
            onClick={() => toggleItem(faq.id)}
          >
            <div
              className="flex justify-between items-center py-4"
              role="button"
              tabIndex={0}
            >
              <h3 className="text-sm font-semibold md:text-sm">
                {faq.question}
              </h3>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  openItem === faq.id ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openItem === faq.id ? "max-h-[500px] pb-4" : "max-h-0"
              }`}
            >
              <div
                className="prose max-w-none text-sm"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>
          </div>
        ))}

        {!showAll && faqs.length > 5 && (
          <Button
            variant="outline"
            onClick={() => setShowAll(true)}
            className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 bg-white shadow-lg hover:bg-gray-50"
          >
            সকল প্রশ্ন-উত্তর
            <ChevronDown className="ml-2 w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Contact CTA */}
      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold mb-4">আরও কোন জিজ্ঞাসা আছে?</h3>
        <Button
          variant="outline"
          className="flex items-center gap-2 mx-auto bg-transparent"
        >
          <Phone className="w-4 h-4 text-green-600" />
          <span className="text-green-600 font-medium">
            কল করুন 16910 নম্বরে
          </span>
        </Button>
      </div>
    </section>
  );
}
