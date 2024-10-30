import { tv } from "tailwind-variants";

import { forwardRef, type HTMLComponentProps } from "@/core";
import { cn } from "@/utils";

export interface CardProps extends HTMLComponentProps<"div"> {
  aspectRatio?: "1/1" | "4/3" | "16/9" | "19/10" | "3/4" | "9/16";
}

const variants = tv({
  base: "relative overflow-clip rounded-3xl bg-neutral-100 shadow",
  variants: {
    aspectRatio: {
      "1/1": "aspect-1/1",
      "4/3": "aspect-4/3",
      "16/9": "aspect-16/9",
      "19/10": "aspect-19/10",
      "3/4": "aspect-3/4",
      "9/16": "aspect-9/16",
    },
  },
  defaultVariants: {
    aspectRatio: "16/9",
  },
});

const Card = forwardRef<"div", CardProps>(
  ({ className, children, as: Tag = "div", aspectRatio, ...props }, ref) => {
    return (
      <Tag
        ref={ref}
        className={cn(variants({ aspectRatio }), className)}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Card.displayName = "Card";

export default Card;
