import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(
  ...classNames: Parameters<typeof clsx> & Parameters<typeof twMerge>
): string {
  return twMerge(clsx(classNames));
}

export { cn };
