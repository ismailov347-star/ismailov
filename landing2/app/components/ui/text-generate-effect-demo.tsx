"use client";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";

const words = `You are given a task to integrate an existing React component in the codebase. The codebase should support shadcn project structure, Tailwind CSS, and TypeScript. Determine the default path for components and styles.`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect duration={2} filter={false} words={words} />;
}