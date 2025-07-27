import Image from "next/image";

interface EngagementSectionProps {
  section: Section;
}

export default function EngagementSection({ section }: EngagementSectionProps) {
  const engagement = section.values as GroupJoinEngagement[];

  return (
    <section className="space-y-4">
      {engagement.map((item) => (
        <div
          key={item.id}
          className="relative overflow-hidden rounded-md"
          style={{
            backgroundImage: `url(${item.background.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 p-6">
            {/* Text content */}
            <div className="flex-1 space-y-3 text-center md:text-left">
              <Image
                src={item.top_left_icon_img}
                alt="Top Icon"
                width={200}
                height={50}
              />
              <h3
                className="text-xl md:text-3xl font-bold"
                style={{ color: item.title_color }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{ color: item.description_color }}
              >
                {item.description}
              </p>

              {/* CTA Button */}
              <a
                href={item.cta.clicked_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm md:text-base bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-xs transition-colors shadow-md"
              >
                {item.cta.text}
              </a>
            </div>

            {/* Thumbnail image */}
            <div className="w-full md:w-72 rounded-md overflow-hidden shadow-lg">
              <Image
                src={item.thumbnail}
                alt={item.title}
                width={264}
                height={180}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
