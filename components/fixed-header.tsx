import Image from "next/image";
import React from "react";

interface FixedHeaderProps {
  data: Data;
}

const FixedHeader = ({ data }: FixedHeaderProps) => {
  const { title, sections } = data;
  return (
    <section className="bg-neutral-900 text-white fixed top-0 left-0 right-0 z-10 h-16">
      <div className="max-w-7xl mx-auto px-4 flex items-center  h-full">
        <div className="space-y-0.5">
          <h1 className="text-base font-bold font-space-grotesk">{title}</h1>
          <div className="flex items-center gap-0.5 cursor-pointer">
            <Image
              src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png"
              alt="Rating"
              width={500}
              height={300}
              className="h-4 w-auto object-contain"
            />
            <p className="text-xs font-medium">
              (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FixedHeader;
