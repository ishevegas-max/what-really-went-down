import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function youtubeUrl(start: number) {
  return `https://www.youtube.com/watch?v=7TqK79kAxOo&t=${start}s`;
}

export function youtubeEmbed(start: number) {
  return `https://www.youtube-nocookie.com/embed/7TqK79kAxOo?start=${start}&rel=0`;
}

export function formatClock(seconds: number) {
  const s = Math.max(0, Math.floor(seconds));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
}
