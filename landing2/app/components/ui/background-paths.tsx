"use client";

import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { CanvasRevealEffect } from '@/app/components/ui/canvas-reveal-effect';

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-slate-950 dark:text-white"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    buttonText = "Get Started",
}: {
    buttonText?: string;
}) {
    return (
        <div className="relative inline-block">
            <div className="absolute inset-0 pointer-events-none">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="relative z-10"
            >
                <div className="relative group">
                    {/* Canvas Reveal Effect рамка */}
                    <div className="absolute -inset-2 rounded-2xl overflow-hidden">
                      <CanvasRevealEffect
                        containerClassName="bg-transparent"
                        colors={["#64748b", "#475569", "#334155"]}
                        opacities={[0.1, 0.15, 0.2]}
                        animationSpeed={4}
                      />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-400/30 via-yellow-400/30 via-green-400/30 via-blue-400/30 to-purple-400/30 rounded-2xl blur-sm"></div>
                    
                    <div
                        className="relative inline-block group bg-gradient-to-b from-black/10 to-white/10 
                        dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg 
                        overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-red-400/50"
                    >
                        <Button
                            variant="ghost"
                            className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                            bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 
                            text-black dark:text-white transition-all duration-300 
                            group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10 
                            hover:shadow-md dark:hover:shadow-neutral-800/50"
                        >
                            <span className="relative z-10">{buttonText}</span>
                        </Button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}