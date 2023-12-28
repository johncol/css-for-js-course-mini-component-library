"use client";

import styled from "styled-components";

type ButtonVariant = "info" | "danger";

type HTMLButtonProps = React.ComponentPropsWithoutRef<"button">;

type StyledButtonProps = HTMLButtonProps & {
  variant?: ButtonVariant;
};

export const SampleButton: React.FC<StyledButtonProps> = (props) => {
  return <StyledButton {...props} />;
};

const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  border-radius: 4px;
  color: #fff;
  padding: 16px 24px;
  font-size: 16px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s ease-in-out;

  background-color: ${({ variant }) => {
    switch (variant) {
      case "info":
        return "#0070f3";
      case "danger":
        return "#e00";
      default:
        return "#666";
    }
  }};

  & + & {
    margin-left: 8px;
  }

  &:hover {
    opacity: 1;
  }
`;
