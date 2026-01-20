"use client";

import { useState } from "react";

export function ActivityImageCarousel({ images }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative h-64 overflow-hidden rounded-xl mb-6">
      <img
        src={images[index]}
        alt=""
        className="w-full h-full object-cover transition-all duration-500"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={() =>
              setIndex((index - 1 + images.length) % images.length)
            }
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full px-3 py-1 text-lg"
          >
            ‹
          </button>
          <button
            onClick={() =>
              setIndex((index + 1) % images.length)
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full px-3 py-1 text-lg"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
