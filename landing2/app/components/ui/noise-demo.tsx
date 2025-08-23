import { Noise } from "@/app/components/ui/noise";

export function NoiseDemo() {
  return (
    <div className="w-full flex items-center justify-center relative">
      {/* Text with noise mask */}
      <div className="relative px-12 py-[200px]">
        <h1 className="text-[8rem] font-black text-muted text-center text-black">
          Oh, edgy!
        </h1>
        <div className="absolute inset-0 mix-blend-overlay rounded-lg"></div>
        <Noise
          patternSize={75}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={35}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}