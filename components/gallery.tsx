"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

interface VideoGalleryProps {
  media: Medium[];
}

export default function VideoGallery({ media }: VideoGalleryProps) {
  const previewMedia = media.filter((m) => m.name === "preview_gallery");
  const trailer = media.find((m) => m.name === "trailer");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const currentMedia = previewMedia[currentIndex] || previewMedia[0];

  const trailerThumbnail =
    trailer?.thumbnail_url ||
    media.find((m) => m.name === "thumbnail")?.resource_value ||
    "/placeholder.svg?width=1280&height=720";

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % previewMedia.length);
    setIsVideoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + previewMedia.length) % previewMedia.length
    );
    setIsVideoPlaying(false);
  };

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  if (!currentMedia) {
    return <div className="text-center text-gray-500">No media available</div>;
  }

  return (
    <div className="space-y-2">
      {/* Main Video/Image Display */}
      <div className="relative aspect-video rounded-xs overflow-hidden bg-black group">
        <div className="relative w-full h-full">
          {isVideoPlaying && currentMedia.resource_type === "video" ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${currentMedia.resource_value}?rel=0&showinfo=0&autoplay=1&mute=0`}
              title="Course Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <Image
                src={
                  currentMedia.thumbnail_url ||
                  currentMedia.resource_value ||
                  trailerThumbnail
                }
                alt={currentMedia.name || "Preview"}
                fill
                className="object-cover"
              />

              {(currentMedia.resource_type === "video" || trailer) && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={handlePlayVideo}
                    className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors cursor-pointer group-hover:scale-110 transform duration-200"
                  >
                    <Play
                      className="w-8 h-8 text-green-600 ml-1"
                      fill="currentColor"
                    />
                  </button>
                </div>
              )}
            </>
          )}

          {/* Slide Arrows */}
          {previewMedia.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 opacity-100 md:opacity-0 group-hover:opacity-100 transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70  opacity-100 md:opacity-0 group-hover:opacity-100 transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      {previewMedia.length > 1 && (
        <div className="flex gap-3 p-4 overflow-x-auto scrollbar-hide">
          {previewMedia.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative flex-shrink-0 w-16 h-12 rounded-xs overflow-hidden transition-all ${
                index === currentIndex
                  ? "ring-2 ring-green-500 ring-offset-2"
                  : "hover:ring-2 hover:ring-gray-300"
              }`}
            >
              <Image
                src={item.thumbnail_url || item.resource_value}
                alt={`Preview ${index + 1}`}
                fill
                className="object-cover"
              />
              {item.resource_type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play
                    className="w-4 h-4 text-white drop-shadow-lg"
                    fill="currentColor"
                  />
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
