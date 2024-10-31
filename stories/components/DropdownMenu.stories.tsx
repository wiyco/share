import {
  BookmarkIcon,
  EyeSlashIcon,
  NoSymbolIcon,
} from "@heroicons/react/20/solid";
import type { Meta, StoryObj } from "@storybook/react";

import { Card, CardImage } from "@/components/card";
import { DropdownMenu } from "@/components/dropdown-menu";

import { TEST_IMAGE } from "../constants";

type Props = React.ComponentProps<typeof DropdownMenu>;

const meta: Meta<Props> = {
  component: DropdownMenu,
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Custom component to trigger dropdown menu.",
      control: {
        type: "text",
      },
    },
    anchor: {
      description: "Position of menu items.",
      control: {
        type: "select",
      },
      options: [
        "top",
        "top start",
        "top end",
        "bottom",
        "bottom start",
        "bottom end",
        "left",
        "left start",
        "left end",
        "right",
        "right start",
        "right end",
      ] as Props["anchor"][],
    },
    items: {
      description: "List of menu items.",
      control: {
        disable: true,
      },
    },
    as: {
      control: {
        type: "inline-radio",
      },
      options: ["div", "span"],
    },
  },
  args: {
    items: [
      {
        icon: <BookmarkIcon className="size-3 fill-black/30" />,
        label: "Bookmark",
        shortcut: "Ctrl+B",
        onClick: (e) => console.log(e.currentTarget.textContent),
      },
      {
        icon: <EyeSlashIcon className="size-3 fill-black/30" />,
        label: "Hide",
        shortcut: "⌘H",
        onClick: (e) => console.log(e.currentTarget.textContent),
      },
      {
        icon: <NoSymbolIcon className="size-3 fill-black/30" />,
        label: "Block User",
        onClick: (e) => console.log(e.currentTarget.textContent),
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const RoundedMenu: Story = {
  render: ({ children, items, ...args }) => (
    <DropdownMenu items={items} {...args}>
      {children}
    </DropdownMenu>
  ),
};

export const RoundedMenuOnCard: Story = {
  args: {
    anchor: "bottom end",
  },
  render: ({ children, items, ...args }) => (
    <Card style={{ maxWidth: "20rem" }}>
      <CardImage src={TEST_IMAGE.src} alt={TEST_IMAGE.alt} />
      <DropdownMenu
        items={items}
        className="absolute right-2.5 top-2.5"
        {...args}
      >
        {children}
      </DropdownMenu>
    </Card>
  ),
};
