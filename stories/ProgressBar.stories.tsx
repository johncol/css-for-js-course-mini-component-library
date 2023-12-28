import type { Meta, StoryObj } from "@storybook/react";

import { ProgressBar } from "../app/components/ProgressBar";

const meta = {
  title: "Components/Progress Bar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      description: "Current value of the progress bar, number between 0 and 100",
      control: {
        type: "number",
        min: 0,
        max: 100,
      },
    },
  },
} satisfies Meta<typeof ProgressBar>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    value: 0,
  },
};

export const Full: Story = {
  args: {
    value: 100,
  },
};

export const Small: Story = {
  args: {
    value: 50,
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    value: 50,
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    value: 50,
    size: "large",
  },
};
