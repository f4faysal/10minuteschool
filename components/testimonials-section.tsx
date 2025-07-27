"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { RiDoubleQuotesL } from "react-icons/ri";

interface TestimonialsSectionProps {
  section: Section;
}

export default function TestimonialsSection({
  section,
}: TestimonialsSectionProps) {
  // video play
  const [isPlayingVideo, setIsPlayingVideo] = useState<string | null>(null);
  const testimonials = section.values as Testimonial[];
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-slate-900">{section.name}</h2>

      <div className="relative">
        <div
          ref={containerRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory pr-4"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-[calc(100%-.5rem)] md:w-[372px] snap-start mt-5"
            >
              <div className="border rounded-sm p-5 h-full shadow-sm bg-white relative flex flex-col justify-between ">
                {/* Quote icon */}
                <div className="absolute -top-4 left-5 bg-red-100 p-2 rounded-full">
                  <RiDoubleQuotesL className="w-4 h-4 text-red-500" />
                </div>

                {/* Video or text testimonial */}
                {testimonial.video_url ? (
                  <div className="w-full mb-2 overflow-hidden rounded-xs aspect-video relative ">
                    {isPlayingVideo === testimonial.id ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${testimonial.video_url}?autoplay=1`}
                        title={`Testimonial by ${testimonial.name}`}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div>
                        <Image
                          src={testimonial.thumb || `/placeholder.svg`}
                          alt="Testimonial video"
                          fill
                          className="object-cover"
                        />
                        <div
                          className="absolute inset-0 flex items-center justify-center cursor-pointer"
                          onClick={() => setIsPlayingVideo(testimonial.id)}
                        >
                          <div className="bg-white/80 backdrop-blur-sm p-2 rounded-full">
                            <Play
                              className="size-12 text-red-500 bg-white rounded-full p-2"
                              fill="currentColor"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <p
                    className="text-base text-slate-700 mb-4 line-clamp-7"
                    dangerouslySetInnerHTML={{
                      __html: testimonial.testimonial,
                    }}
                  />
                )}

                {/* Profile Info */}
                <div className="flex items-center gap-4 mt-auto">
                  <Image
                    src={testimonial.profile_image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-slate-800">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-500">
                      {testimonial.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows (shown on md+ screens) */}
        {testimonials.length > 2 && (
          <>
            <button
              onClick={scrollLeft}
              className="hidden md:flex absolute -left-2 top-1/2 -translate-y-1/2 size-8 bg-slate-700 text-white rounded-full  items-center justify-center shadow hover:bg-slate-800"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollRight}
              className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 size-8  bg-slate-700 text-white rounded-full  items-center justify-center shadow hover:bg-slate-800"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>
    </section>
  );
}
