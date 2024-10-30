import { tv } from "tailwind-variants";

import { forwardRef, type HTMLComponentProps } from "@/core";
import { cn } from "@/utils";

export interface CardTextProps extends HTMLComponentProps<"p"> {
  as?: React.ElementType;
  lineClamp?: 1 | 2 | 3 | 4 | 5 | 6 | "none";
}

const variants = tv({
  base: "absolute inset-0 grid place-content-center p-5 backdrop-blur text-center text-neutral-900 text-base",
});

const CardText = forwardRef<"p", CardTextProps>(
  ({ className, children, as: Tag = "p", ...props }, ref) => {
    return (
      <Tag ref={ref} className={cn(variants(), className)} {...props}>
        <span className="line-clamp-3 whitespace-pre-line leading-relaxed">
          {children}
        </span>
      </Tag>
    );
  }
);

CardText.displayName = "CardText";

export default CardText;
