import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface InstructorsSectionProps {
  section: Section;
}

export default function InstructorsSection({
  section,
}: InstructorsSectionProps) {
  const instructors = section.values as Instructor[];

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        {section.name}
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {instructors.map((instructor) => (
          <Card
            key={instructor.slug}
            className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-gray-900 border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-shadow"
          >
            <CardContent className="p-6 flex flex-col sm:flex-row items-start gap-6">
              <Image
                src={instructor.image || "/placeholder.svg"}
                alt={instructor.name}
                width={120}
                height={120}
                className="rounded-lg object-cover border-4 border-white dark:border-slate-800 shadow-lg"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                  {instructor.name}
                </h3>
                <p className="text-sm font-semibold text-primary mb-2">
                  {instructor.short_description}
                </p>
                <div
                  className="text-sm prose prose-sm max-w-none text-slate-600 dark:text-slate-400"
                  dangerouslySetInnerHTML={{ __html: instructor.description }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
