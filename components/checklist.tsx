import React from "react";
import VideoGallery from "./gallery";
import { Button } from "./ui/button";
import Image from "next/image";

interface ChecklistProps {
  data: Data;
}

const Checklist = ({ data }: ChecklistProps) => {
  const { media, cta_text, checklist } = data;
  return (
    <div className="md:sticky top-0 space-y-6 z-30">
      <div className="bg-white md:shadow-lg rounded-xs p-1.5">
        <div className="hidden md:block">
          <VideoGallery media={media} />
        </div>
        <div className="p-4 pt-0">
          <Button className="w-full mb-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 text-lg">
            {cta_text.name}
          </Button>
          <div className="space-y-3">
            <h4 className="font-semibold text-sm mb-3">এই কোর্সে যা পাবেন:</h4>
            {checklist.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <Image
                  src={stat.icon}
                  alt={stat.text}
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                <span className="text-sm text-gray-700">{stat.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checklist;
