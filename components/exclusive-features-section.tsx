import Image from "next/image";

interface ExclusiveFeaturesSectionProps {
  section: Section;
}

export default function ExclusiveFeaturesSection({
  section,
}: ExclusiveFeaturesSectionProps) {
  const features = section.values as ExclusiveFeature[];

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-slate-900">{section.name}</h2>
      <div className="border rounded-md p-6 md:p-8 flex flex-col gap-2">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col md:flex-row gap-6 items-start justify-between"
          >
            {/* Textual content */}
            <div className="flex-1 space-y-4">
              <h3 className="text-base font-semibold text-slate-800 ">
                {feature.title}
              </h3>
              <ul className="space-y-2 pl-0">
                {feature.checklist.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-slate-700 text-sm leading-relaxed"
                  >
                    <span className="mt-1 text-blue-500">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="w-full md:w-48 flex-shrink-0">
              <Image
                src={feature.file_url || "/placeholder.svg"}
                alt={feature.title}
                width={224}
                height={224}
                className="rounded-md w-full h-auto object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
