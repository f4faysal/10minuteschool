import { CheckCircle2 } from "lucide-react";

interface LearningOutcomesSectionProps {
  section: Section;
}

export default function LearningOutcomesSection({
  section,
}: LearningOutcomesSectionProps) {
  const pointers = section.values as Pointer[];

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-slate-900 mt-4">{section.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 border p-4">
        {pointers.map((pointer) => (
          <div key={pointer.id} className="flex items-start gap-3">
            <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              {pointer.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
