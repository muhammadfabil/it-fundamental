'use client'
// components/ImageSlider.tsx
import { useState } from "react";
import Image from "next/image";

const images = [
  "/home1.JPG",
  "/home2.JPG",
  
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative ">
      <Image
        src={images[currentIndex]}
        alt="Event Image"
        height={1000}
        width={1000}
        objectFit="cover"
        className="rounded-lg"
      />

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        &larr;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        &rarr;
      </button>
    </div>
  );
}
