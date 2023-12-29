import styled from "styled-components";

import { v4 as generateRandomId } from "uuid";

export type Scale = "small" | "large";

type CustomIconInputProps = {
  scale?: Scale;
  icon?: React.ReactNode;
};

type NativeInputProps = React.ComponentProps<"input">;

export type IconInputProps = NativeInputProps & CustomIconInputProps;

export const IconInput: React.FC<IconInputProps> = ({
  scale = "small",
  id = generateRandomId(),
  icon,
  ...props
}) => {
  return (
    <Wrapper>
      <StyledInput {...props} scale={scale} id={id} />
      <IconWrapper as="label" htmlFor={id} scale={scale}>
        {icon}
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  --placeholder-color: rgba(129, 129, 129, 1);
  --font-color: rgba(101, 101, 101, 1);
  --font-color-hover: rgba(0, 0, 0, 1);
`;

const IconWrapper = styled.div<{ scale: Scale }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 4px;
  margin: auto 0;

  --size: ${({ scale }) => (scale === "small" ? "14px" : "20px")};
  height: var(--size);
  width: var(--size);

  color: var(--font-color);
  transition: color 0.1s linear;
`;

const StyledInput = styled.input<IconInputProps>`
  border: none;
  border-bottom: 1px solid var(--font-color-hover);
  outline-offset: 2px;

  width: ${({ width }) => width ?? "auto"};
  padding: ${({ scale }) => (scale === "small" ? "4px 24px" : "8px 36px")};
  font-size: ${({ scale }) => (scale === "small" ? "14px" : "18px")};
  font-family: inherit;
  font-weight: 700;
  color: var(--font-color);
  transition: color 0.1s linear;

  &:hover,
  &:hover + ${IconWrapper} {
    color: var(--font-color-hover);
  }

  &::placeholder,
  &:placeholder-shown + ${IconWrapper} {
    font-weight: 100;
    color: var(--placeholder-color);
  }
`;
