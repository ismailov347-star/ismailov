import Image from "next/image";
import { useState, useEffect } from "react";

interface ImageCarouselProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
}

export default function ImageCarousel({ images, autoPlay = false, interval = 3000, showDots = true }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoPlay && images.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, images.length]);

  return (
    <div className="relative w-full">
      {images.length === 1 ? (
        <div className="w-full flex justify-center">
          <div className="w-[280px] md:w-[360px]">
            <div className="img-card rotate-[1.5deg] md:rotate-[.5deg] hover:rotate-0">
              <div className="relative p-[3px] rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <Image src={images[0]} alt="Изображение" width={720} height={440} className="w-full h-[240px] md:h-[280px] object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="w-full overflow-x-auto">
            <div className="flex gap-4 pb-4 snap-x-mandatory">
              {images.map((src, i) => (
                <div key={i} className="snap-start shrink-0 w-[280px] md:w-[360px]">
                  <div className="img-card rotate-[1.5deg] md:rotate-[.5deg] hover:rotate-0">
                    <div className="relative p-[3px] rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                      <Image src={src} alt={`Изображение ${i+1}`} width={720} height={440} className="w-full h-[240px] md:h-[280px] object-cover rounded-lg" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {showDots && images.length > 1 && (
            <div className="flex justify-center mt-4 space-x-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'bg-purple-500' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}