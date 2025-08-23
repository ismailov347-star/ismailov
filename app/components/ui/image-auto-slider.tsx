'use client';
import React from 'react';
import Image from 'next/image';

export const ImageAutoSlider = () => {
  // Real screenshots of thank you messages
  const images = [
    "/photo_2025-07-22_19-30-39.jpg",
    "/photo_2025-07-22_19-30-41.jpg",
    "/photo_2025-07-22_19-30-42.jpg",
    "/photo_2025-07-22_19-30-43.jpg",
    "/photo_2025-07-22_19-30-45.jpg",
    "/photo_2025-07-22_19-30-46.jpg",
    "/photo_2025-07-22_19-30-48.jpg"
  ];

  return (
    <div className="w-full bg-black/50 relative overflow-hidden rounded-xl p-3">
      {/* Masonry-style grid */}
      <div className="columns-2 md:columns-3 gap-2">
        {images.map((src, index) => (
          <div key={index} className="break-inside-avoid mb-2">
            <div className="relative p-[3px] rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
              <Image 
                src={src} 
                alt={`Сообщение с благодарностью ${index + 1}`} 
                width={400} 
                height={500} 
                className="w-full h-auto object-cover rounded-lg" 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};