import styled from "styled-components";
import { ArrowDown } from "./icons/ArrowDown";

export type DropdownOption = {
  value: string;
  label: string;
};

export type CustomDropdownProps = {
  value: string;
  onChange: (value: string) => void;
  options: DropdownOption[];
  placeholder?: string;
};

type NativeDropdownProps = React.ComponentProps<"select">;

type DropdownProps = NativeDropdownProps & CustomDropdownProps;

export const Dropdown: React.FC<DropdownProps> = ({
  value,
  onChange,
  options,
  placeholder,
  ...props
}) => {
  return (
    <Wrapper>
      <StyledSelect
        {...props}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <PlaceholderOption value={value} placeholder={placeholder} />
        <OptionsList options={options} />
      </StyledSelect>
      <IconWrapper>
        <ArrowDown />
      </IconWrapper>
    </Wrapper>
  );
};

const OptionsList: React.FC<{ options: DropdownOption[] }> = ({ options }) => {
  return (
    <>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </>
  );
};

const PlaceholderOption: React.FC<{ value: string; placeholder?: string }> = ({
  value,
  placeholder,
}) => {
  if (value) {
    return null;
  }
  return (
    <option value="" disabled>
      {placeholder ?? "--"}
    </option>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  color: rgba(101, 101, 101, 1);
  transition: color 0.1s linear;

  &:hover {
    color: rgba(0, 0, 0, 1);
  }
`;

const StyledSelect = styled.select`
  appearance: none;
  border: none;
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  background-color: rgba(128, 128, 128, 0.15);
  color: inherit;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  pointer-events: none;
`;
