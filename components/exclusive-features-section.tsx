import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Check } from "lucide-react";

interface ExclusiveFeaturesSectionProps {
  section: Section;
}

export default function ExclusiveFeaturesSection({
  section,
}: ExclusiveFeaturesSectionProps) {
  const features = section.values as ExclusiveFeature[];

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        {section.name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature) => (
          <Card
            key={feature.id}
            className="overflow-hidden bg-white dark:bg-slate-800/50 border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={feature.file_url || "/placeholder.svg"}
              alt={feature.title}
              width={500}
              height={500}
              className="w-full h-auto object-cover aspect-square"
            />
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-slate-200">
                {feature.title}
              </h3>
              <ul className="space-y-2.5">
                {feature.checklist.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
