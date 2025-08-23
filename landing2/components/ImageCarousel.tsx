import Image from "next/image";

export default function ImageCarousel() {
  const images = ["/placeholder1.jpg","/placeholder2.jpg","/placeholder3.jpg","/placeholder4.jpg"];
  return (
    <div className="relative">
      <div className="flex gap-4 overflow-x-auto snap-x-mandatory pb-2">
        {images.map((src, i) => (
          <div key={i} className="snap-start shrink-0 w-[280px] md:w-[360px]">
            <div className="img-card rotate-[1.5deg] md:rotate-[.5deg] hover:rotate-0">
              <Image src={src} alt={`Пример формата ${i+1}`} width={720} height={440} className="w-full h-auto rounded-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}