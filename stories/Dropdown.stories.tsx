import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown, DropdownOption } from "../app/components/Dropdown";
import { useEffect, useState } from "react";

type DropdownWrapperProps = {
  value: string;
  options: DropdownOption[];
};

const DropdownWrapper = (props: DropdownWrapperProps) => {
  const [value, setValue] = useState(props.value);
  useEffect(() => {
    setValue(props.value);
  }, [props.value]);
  return (
    <Dropdown
      options={props.options}
      value={value}
      onChange={(option) => setValue(option as string)}
    />
  );
};

const meta = {
  title: "Components/Dropdown",
  component: DropdownWrapper,
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
    options: {
      description: "List of options to display in the dropdown",
      control: {
        type: "array",
      },
    },
  },
} satisfies Meta<typeof Dropdown>;
export default meta;

type Story = StoryObj<typeof meta>;

const DUMMY_OPTIONS = [
  { value: "", label: "" },
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "long-option", label: "Some Really Long Option" },
];

export const OptionSelected: Story = {
  args: {
    value: "option1",
    options: DUMMY_OPTIONS,
  },
};

export const NoOptionSelected: Story = {
  args: {
    value: "",
    options: DUMMY_OPTIONS,
  },
};
