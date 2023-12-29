import type { Meta, StoryObj } from "@storybook/react";

import { useEffect, useState } from "react";
import { IconInput, IconInputProps } from "../app/components/IconInput";
import { Search } from "../app/components/icons/Search";

const IconInputWrapper = (props: IconInputProps) => {
  const [value, setValue] = useState(props.value);
  useEffect(() => {
    setValue(props.value);
  }, [props.value]);
  return (
    <IconInput
      {...props}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

const meta = {
  title: "Components/IconInput",
  component: IconInputWrapper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      description: "Current value of the dropdown",
      control: {
        type: "text",
      },
    },
    placeholder: {
      description: "Placeholder text to display when no input has been entered",
      control: {
        type: "text",
      },
    },
    width: {
      description: "Width of the input",
      control: {
        type: "text",
      },
    },
    scale: {
      description: "Size of the input",
      control: {
        options: ["small", "large"],
        type: "radio",
      },
    },
    icon: {
      description: "Icon to display in the input",
      control: {
        type: null,
      },
    },
  },
  args: {
    value: "",
    placeholder: "",
    width: "",
    scale: "small",
    icon: <Search />,
  },
} satisfies Meta<typeof IconInput>;
export default meta;

type Story = StoryObj<typeof meta>;

export const EmptyWithoutPlaceHolder: Story = {
  args: {
    value: "",
  },
};

export const EmptyWithPlaceHolder: Story = {
  args: {
    value: "",
    placeholder: "Search",
  },
};

export const Filled: Story = {
  args: {
    value: "Some value",
  },
};

export const CustomWidth: Story = {
  args: {
    value: "",
    placeholder: "Search",
    width: "100px",
  },
};

export const Small: Story = {
  args: {
    value: "",
    placeholder: "Search",
    scale: "small",
  },
};

export const Large: Story = {
  args: {
    value: "",
    placeholder: "Search",
    scale: "large",
  },
};
