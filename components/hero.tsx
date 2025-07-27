import React from "react";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import VideoGallery from "./gallery";

interface HeroProps {
  data: Data;
}

const Hero = ({ data }: HeroProps) => {
  const { title, description, sections, checklist, media } = data;

  return (
    <section className="text-white  md:h-[400px] bg-[url('/bg.jpeg')] bg-cover bg-center">
      <div className="max-w-7xl mx-auto px-4 pt-8 md:py-8 h-full flex flex-col justify-center">
        <div className="sm:hidden mt-5">
          <VideoGallery media={media} />
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-space-grotesk">
          {title}
        </h1>
        <div
          className="text-white/90 text-base sm:text-lg leading-relaxed max-w-3xl"
          dangerouslySetInnerHTML={{ __html: description! }}
        />
        <div className="hidden md:flex flex-wrap gap-4 text-white pt-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>{checklist[0].text}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>{checklist[2].text}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span>{checklist[8].text}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 my-8">
          <Avatar className="w-12 h-12">
            <AvatarImage src={sections[2].values[0].image} />
            <AvatarFallback>
              <span className="text-sm">MS</span>
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{sections[2].values[0].name}</p>
            <div
              className="text-sm text-gray-300"
              dangerouslySetInnerHTML={{
                __html: sections[2].values[0].description?.split(";")[0],
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
