import type { Meta, StoryObj } from "@storybook/react";

import { SampleButton } from "../app/components/SampleButton";

const meta = {
  title: "Example/Sample Button",
  component: SampleButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["default", "info", "danger"],
      },
    },
  },
  args: {
    children: "Sample Button",
  },
} satisfies Meta<typeof SampleButton>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
  },
};
