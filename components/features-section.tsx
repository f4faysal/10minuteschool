import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface FeaturesSectionProps {
  section: Section;
}

export default function FeaturesSection({ section }: FeaturesSectionProps) {
  const features = section.values as Feature[];

  return (
    <section className="space-y-2">
      <h2 className="text-xl font-bold text-slate-900 mt-4">{section.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 bg-stone-950 rounded-sm p-2">
        {features.map((feature) => (
          <div key={feature.id}>
            <div className="flex items-start p-6 gap-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <Image
                  src={feature.icon || "/placeholder.svg"}
                  alt=""
                  width={30}
                  height={30}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-200">{feature.title}</h3>
                <p className="text-sm text-slate-400 mt-1">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
