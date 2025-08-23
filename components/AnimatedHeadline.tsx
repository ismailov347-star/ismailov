"use client";
import { useEffect, useMemo, useRef, useState } from "react";

type WordSpec = {
  text: string;
  delay: number; // ms
};

export default function AnimatedHeadline({
  phrase = "СИСТЕМА ЛЁГКОГО КОНТЕНТА",
  baseDelay = 0,
  step = 500, // задержка между словами
}: {
  phrase?: string;
  baseDelay?: number;
  step?: number;
}) {
  const words = useMemo<WordSpec[]>(
    () =>
      phrase.split(" ").map((w, i) => ({
        text: w,
        delay: baseDelay + i * step,
      })),
    [phrase, baseDelay, step]
  );

  return (
    <h1
      className="mt-3 text-3xl md:text-5xl font-lepka tracking-tight text-white leading-tight"
      aria-label={phrase}
    >
      {words.map((w, idx) => (
        <Word key={idx} text={w.text} delay={w.delay} />
      ))}
    </h1>
  );
}

function Word({ text, delay }: { text: string; delay: number }) {
  const [stage, setStage] = useState<"idle" | "drop" | "shake" | "done">("idle");
  const [showSparks, setShowSparks] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setStage("drop"), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (stage === "drop") {
      const t = setTimeout(() => setStage("shake"), 700); // длительность падения
      return () => clearTimeout(t);
    }
    if (stage === "shake") {
      // показать искры в начале "тряски"
      setShowSparks(true);
      const t = setTimeout(() => {
        setStage("done");
        setShowSparks(false);
      }, 400); // длительность тряски
      return () => clearTimeout(t);
    }
  }, [stage]);

  // Подготовим случайные искры
  const sparks = useMemo(() => {
    const arr = [];
    const N = 10; // количество искр
    for (let i = 0; i < N; i++) {
      const angle = (Math.PI * 2 * i) / N + Math.random() * 0.4;
      const dist = 18 + Math.random() * 22; // px
      const dx = Math.cos(angle) * dist;
      const dy = Math.sin(angle) * dist;
      const dur = 400 + Math.random() * 350; // ms
      const size = 3 + Math.random() * 2; // px
      arr.push({ dx, dy, dur, size, delay: Math.random() * 80 });
    }
    return arr;
  }, []);

  return (
    <span className="relative inline-block mr-2 align-baseline">
      {/* Слово */}
      <span
        ref={ref}
        className={[
          "inline-block will-change-transform",
          stage === "drop" ? "animate-dropIn" : "",
          stage === "shake" ? "animate-shakeSoft" : "",
          stage === "idle" ? "opacity-0" : "opacity-100",
          // Сделаем шрифт «вау»: увеличим letter-spacing и толщину именно для заголовка,
          // но визуально он будет менее «толстым» за счёт капс-ритма и трекинга
          "tracking-wide",
        ].join(" ")}
        style={{ animationDelay: `${stage === "drop" ? delay : 0}ms` }}
      >
        {text}
      </span>

      {/* Искры */}
      {showSparks && (
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          {sparks.map((s, i) => (
            <span
              key={i}
              className="spark"
              style={
                {
                  "--dx": `${s.dx}px`,
                  "--dy": `${s.dy}px`,
                  "--sparkDur": `${s.dur}ms`,
                  "--sparkDelay": `${s.delay}ms`,
                  width: `${s.size}px`,
                  height: `${s.size}px`,
                } as React.CSSProperties
              }
            />
          ))}
        </span>
      )}
    </span>
  );
}