"use client";
import { useEffect, useRef, useState } from "react";

export default function RevealOnScroll({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current!;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setShow(true)),
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ animationDelay: show ? `${delay}ms` : undefined }}
      className={`opacity-0 ${show ? "animate-fadeUp" : ""}`}
    >
      {children}
    </div>
  );
}