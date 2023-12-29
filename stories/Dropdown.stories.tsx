import type { Meta, StoryObj } from "@storybook/react";

import { useEffect, useState } from "react";
import { CustomDropdownProps, Dropdown } from "../app/components/Dropdown";

type DropdownWrapperProps = Omit<CustomDropdownProps, "onChange">;

const DropdownWrapper = (props: DropdownWrapperProps) => {
  const [value, setValue] = useState(props.value);
  useEffect(() => {
    setValue(props.value);
  }, [props.value]);
  return (
    <Dropdown
      {...props}
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
    placeholder: {
      description: "Placeholder text to display when no option is selected",
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof Dropdown>;
export default meta;

type Story = StoryObj<typeof meta>;

const DUMMY_OPTIONS = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "long-option", label: "Some Really Long Option" },
];

export const NoOptionSelected: Story = {
  args: {
    value: "",
    options: DUMMY_OPTIONS,
  },
};

export const WithPlaceholder: Story = {
  args: {
    value: "",
    options: DUMMY_OPTIONS,
    placeholder: "Select an option",
  },
};

export const OptionSelected: Story = {
  args: {
    value: "option1",
    options: DUMMY_OPTIONS,
  },
};
