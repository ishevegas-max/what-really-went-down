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
