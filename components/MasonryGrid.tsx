'use client';
import Image from "next/image";
import { useState } from "react";

interface MasonryGridProps {
  images: string[];
}

export default function MasonryGrid({ images }: MasonryGridProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
        {images.map((src, i) => (
          <div key={i} className="">
            <div className="relative p-[3px] rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer" onClick={() => setSelectedImageIndex(i)}>
              <Image 
                src={src} 
                alt={`Охваты ${i+1}`} 
                width={300} 
                height={300} 
                className={`w-full aspect-[4/5] object-cover rounded-lg ${i < 2 ? 'object-bottom' : 'object-center'}`} 
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed top-4 right-4 z-50 max-w-md w-80 bg-black/90 backdrop-blur-sm rounded-xl p-4 shadow-2xl border border-white/20">
          <div className="relative">
            <div className="relative p-[2px] rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
              <Image 
                src={images[selectedImageIndex]} 
                alt="Увеличенное изображение" 
                width={400} 
                height={300} 
                className="w-full h-auto object-contain rounded-md" 
              />
            </div>
            
            {/* Navigation buttons */}
            {selectedImageIndex > 0 && (
              <button 
                onClick={() => setSelectedImageIndex(selectedImageIndex - 1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-lg font-bold transition-colors"
              >
                ‹
              </button>
            )}
            
            {selectedImageIndex < images.length - 1 && (
              <button 
                onClick={() => setSelectedImageIndex(selectedImageIndex + 1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-lg font-bold transition-colors"
              >
                ›
              </button>
            )}
            
            {/* Close button */}
            <button 
              onClick={() => setSelectedImageIndex(null)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold transition-colors"
            >
              ×
            </button>
            
            {/* Image counter */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}