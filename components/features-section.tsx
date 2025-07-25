import type { Section, Feature } from "@/types"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface FeaturesSectionProps {
  section: Section
}

export default function FeaturesSection({ section }: FeaturesSectionProps) {
  const features = section.values as Feature[]

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100">{section.name}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((feature) => (
          <Card
            key={feature.id}
            className="bg-white dark:bg-slate-900/50 border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <CardContent className="flex flex-col items-center text-center p-6 gap-4">
              <div className="bg-blue-100 dark:bg-blue-900/50 p-4 rounded-full">
                <Image src={feature.icon || "/placeholder.svg"} alt="" width={40} height={40} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-800 dark:text-slate-200">{feature.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{feature.subtitle}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
