import Image from "next/image";

interface InstructorsSectionProps {
  section: Section;
}

export default function InstructorsSection({
  section,
}: InstructorsSectionProps) {
  const instructors = section.values as Instructor[];

  return (
    <section className="space-y-2">
      <h2 className="text-xl font-bold text-slate-900">{section.name}</h2>
      <div className="grid grid-cols-1 gap-6">
        {instructors.map((instructor) => (
          <div key={instructor.slug} className="border rounded-xs bg-white">
            <div className="p-4 flex flex-col sm:flex-row items-start gap-6">
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
                <p className="text-sm font-semibold text-primary mb-1">
                  {instructor.short_description}
                </p>
                <div
                  className="text-sm prose prose-sm max-w-none text-slate-600 dark:text-slate-400"
                  dangerouslySetInnerHTML={{ __html: instructor.description }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
