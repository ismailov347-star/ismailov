"use client";
import Image from "next/image";

export default function Carousel3D() {
  const images = ["/placeholder1.jpg","/placeholder2.jpg","/placeholder3.jpg","/placeholder4.jpg"];
  const RADIUS = 380; // px

  return (
    <div className="scene-3d mx-auto w-full max-w-3xl">
      <div className="carousel-3d relative h-[320px] md:h-[380px] animate-slowSpin hover:[animation-play-state:paused]">
        {images.map((src, i) => {
          const angle = (360 / images.length) * i;
          const transform = `rotateY(${angle}deg) translateZ(${RADIUS}px)`;
          return (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ transform }}
            >
              <div className="img-card w-[220px] md:w-[260px] hover:shadow-glow">
                <Image src={src} alt={`Благодарности ${i+1}`} width={520} height={320} className="w-full h-auto rounded-xl" />
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-3 text-center text-sm text-subtle/70">Наведи мышкой — вращение приостановится</p>
    </div>
  );
}