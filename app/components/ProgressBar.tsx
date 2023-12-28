import React from "react";
import styled from "styled-components";

type Size = "small" | "medium" | "large";

type NativeProgressProps = Omit<React.ComponentProps<"progress">, "max">;

type CustomProgressBarProps = {
  value: number;
  size?: Size;
};

type ProgressBarProps = NativeProgressProps & CustomProgressBarProps;

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  size = "medium",
  ...props
}) => {
  value = normalizeValue(value);

  return (
    <StyledProgressBar
      {...props}
      size={size}
      value={value}
      closeToFinish={value >= 99}
    >
      {value}%
    </StyledProgressBar>
  );
};

const normalizeValue = (value: number): number => {
  if (value < 0) {
    return 0;
  }
  if (value > 100) {
    return 100;
  }
  return value;
};

type StyledProgressBarProps = ProgressBarProps & {
  closeToFinish: boolean;
};

const StyledProgressBar = styled.progress.attrs<StyledProgressBarProps>(
  (props) => ({
    max: 100,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": props.value,
  })
)`
  border: none;
  display: block;
  width: 370px;
  height: ${({ size }) => {
    switch (size) {
      case "small":
        return "8px";
      case "medium":
        return "12px";
      case "large":
        return "24px";
    }
  }};

  box-shadow: 0px 2px 4px 0px rgba(128, 128, 128, 0.35) inset;
  background: rgba(128, 128, 128, 0.15);
  padding: ${({ size }) => {
    return size === "large" ? "4px" : "0";
  }};
  border-radius: ${({ size }) => {
    return size === "large" ? "8px" : "4px";
  }};

  // webkit
  &::-webkit-progress-bar {
    background: transparent;
  }
  &::-webkit-progress-value {
    background: rgba(71, 71, 235, 1);
    border-radius: ${({ closeToFinish }) => {
      return closeToFinish ? "4px" : "4px 0 0 4px";
    }};
  }

  // firefox
  &::-moz-progress-bar {
    background: rgba(71, 71, 235, 1);
    border-radius: ${({ closeToFinish }) => {
      return closeToFinish ? "4px" : "4px 0 0 4px";
    }};
  }
`;
