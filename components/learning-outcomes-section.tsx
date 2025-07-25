import { CheckCircle2 } from "lucide-react";

interface LearningOutcomesSectionProps {
  section: Section;
}

export default function LearningOutcomesSection({
  section,
}: LearningOutcomesSectionProps) {
  const pointers = section.values as Pointer[];

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        {section.name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {pointers.map((pointer) => (
          <div key={pointer.id} className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              {pointer.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
