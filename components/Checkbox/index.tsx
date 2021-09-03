import {
  CustomCheckbox,
  CustomCheckboxContainer,
  CustomCheckboxInput,
} from "@reach/checkbox";
import "@reach/checkbox/styles.css";
import { useState } from "react";
import styled from "styled-components";
interface CheckboxProps {
  checked: boolean;
  handleCheck: () => void;
}

const Checkbox = ({ checked, handleCheck }: CheckboxProps) => {
  return (
    <CustomCheckboxContainer
      checked={checked}
      onChange={() => handleCheck()}
      style={getContainerStyle()}
    >
      <CustomCheckboxInput />
      <CustomSpan aria-hidden checked={checked} />
    </CustomCheckboxContainer>
  );
};

export default Checkbox;
function getContainerStyle() {
  return {
    background: "var(--color-subtleBackground)",
    border: "var(--color-border)",
    borderRadius: "6px",
    height: 25,
    width: 25,
  };
}

const CustomSpan = styled.span<{ checked: boolean }>`
  display: block;
  position: absolute;
  width: 50%;
  height: 50%;
  top: 50%;
  left: 50%;
  border-radius: 2px;
  transition: transform 200ms ease-out, background 200ms ease-out;
  z-index: 1;
  background: ${(props) =>
    props.checked ? "var(--color-primary)" : "transparent"};
  transform: ${(props) => `translate(-50%, -50%) scaleX(${
    props.checked ? 1 : 0
  }) scaleY(
      ${props.checked ? "1" : "0"})`};
`;
