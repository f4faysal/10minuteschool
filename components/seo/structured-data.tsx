"use client";

import { useEffect } from "react";

interface StructuredDataProps {
  data: any[];
}
export default function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    // Validate structured data in development
    if (process.env.NODE_ENV === "development") {
      data.forEach((item, index) => {
        try {
          JSON.stringify(item);
        } catch (error) {
          console.error(`Structured data ${index + 1} is invalid:`, error);
        }
      });
    }
  }, [data]);

  return (
    <>
      {data.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item),
          }}
        />
      ))}
    </>
  );
}
