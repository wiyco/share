import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import MenuIcon from "@heroicons/react/24/outline/Bars3Icon";
import { tv } from "tailwind-variants";

import { forwardRef, type HTMLComponentProps } from "@/core";

type Align = "start" | "end";
type Placement = "top" | "right" | "bottom" | "left";
/**
 * ```ts
 * type Align = "start" | "end";
 * type Placement = "top" | "right" | "bottom" | "left";
 * ```
 * @see MenuItems
 * @see `@headlessui/react/dist/internal/floating.d.ts`
 */
type Anchor = `${Placement}` | `${Placement} ${Align}`;

export interface DropdownMenuProps extends HTMLComponentProps<"div"> {
  radius?:
    | "none"
    | "sm"
    | "default"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "full";
  anchor?: Anchor;
  items?: {
    icon?: React.ReactElement;
    label: string;
    shortcut?: string;
    onClick?: React.ComponentProps<"button">["onClick"];
  }[];
}

const menuButtonVariants = tv({
  base: "inline-flex w-fit items-center overflow-clip rounded-full bg-white/60 p-2 text-center shadow-sm backdrop-blur-lg transition duration-100 ease-out focus:outline-none data-[hover]:bg-white/40 data-[open]:bg-white/40 data-[focus]:outline-1 data-[focus]:outline-black",
  variants: {
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      default: "rounded",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    radius: "full",
  },
});

const menuItemsVariants = tv({
  base: "min-w-48 overflow-clip rounded-xl border border-black/5 bg-white/60 p-1 text-sm/6 shadow-sm backdrop-blur-lg transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0",
  variants: {
    anchor: {
      top: "origin-bottom",
      "top start": "origin-bottom-left",
      "top end": "origin-bottom-right",
      bottom: "origin-top",
      "bottom start": "origin-top-left",
      "bottom end": "origin-top-right",
      left: "origin-right",
      "left start": "origin-top-right",
      "left end": "origin-bottom-right",
      right: "origin-left",
      "right start": "origin-top-left",
      "right end": "origin-bottom-left",
    } as Record<Anchor, string>,
  },
  defaultVariants: {
    anchor: "bottom start",
  },
});

const DropdownMenu = forwardRef<"div", DropdownMenuProps>(
  (
    {
      className,
      children = <MenuIcon className="size-4" />,
      as: Tag = "div",
      radius,
      anchor,
      items = [],
      ...props
    },
    ref
  ) => {
    return (
      <Tag ref={ref} className={className} {...props}>
        <Menu>
          <MenuButton className={menuButtonVariants({ radius })}>
            {children}
          </MenuButton>
          <MenuItems
            transition
            anchor={anchor}
            className={menuItemsVariants({ anchor })}
          >
            {items.map((item, index) => (
              <MenuItem key={index}>
                <button
                  className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10"
                  onClick={item.onClick}
                >
                  {item.icon}
                  {item.label}
                  {item.shortcut && (
                    <kbd className="ml-auto hidden font-sans text-xs text-black/50 group-data-[focus]:inline">
                      {item.shortcut}
                    </kbd>
                  )}
                </button>
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
      </Tag>
    );
  }
);

DropdownMenu.displayName = "DropdownMenu";

export default DropdownMenu;
