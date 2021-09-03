import { forwardRef } from "react";
import { IconType } from "react-icons";
import styled, { css } from "styled-components";
import Paragraph from "../Paragraph";

interface BaseInputProps extends React.ComponentPropsWithoutRef<"input"> {
  /**
   * 	Start Adornment.
   */
  startAdornment?: any;
  /**
   * 	End Adornment.
   */
  endAdornment?: any;
  /**
   * 	The label of the input.
   */
  label?: string;

  /**
   * 	Optional description shown in a smaller size text below the input.
   */
  desc?: string;
}

const Input = forwardRef<HTMLDivElement, BaseInputProps>(
  ({ label, startAdornment, endAdornment, desc, ...delegated }, ref) => {
    return (
      <div>
        {label && <Label>{label}</Label>}
        <InputWrapper ref={ref} disabled={delegated.disabled}>
          {startAdornment &&
            (typeof startAdornment === "object" ? (
              <Adornment>{startAdornment}</Adornment>
            ) : (
              <TextAdornment>{startAdornment}</TextAdornment>
            ))}
          <DefaultInput {...delegated} />
          {endAdornment &&
            (typeof endAdornment === "object" ? (
              <Adornment>{endAdornment}</Adornment>
            ) : (
              <TextAdornment>{endAdornment}</TextAdornment>
            ))}
        </InputWrapper>
        {desc && (
          <InputDesc color="primary" weight="bold">
            {desc}
          </InputDesc>
        )}
      </div>
    );
  }
);

export default Input;

const InputWrapper = styled.div<{ disabled?: boolean }>`
  position: relative;
  overflow: hidden;
  display: flex;
  background-color: var(--color-subtleBackground);
  border: var(--color-border);
  border-radius: var(--border-radius);
  transition: 150ms border ease-out;
  &:hover,
  &:focus,
  &:focus-within {
    border-color: ${(props) => !props.disabled && "var(--color-secondary)"};
  }
  ${(props) =>
    props.disabled &&
    css`
      opacity: 50%;
      cursor: not-allowed;
    `}
`;

const Label = styled.label`
  color: var(--color-textAlt);
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  display: block;
  font-weight: ${(props) => props.theme.font.semibold};
`;
const InputDesc = styled(Paragraph)`
  font-size: 0.8rem;
`;
const BaseInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 0.9rem;
  color: var(--color-text);
  flex: 1;
  outline: none;
  min-width: 0;
  &:disabled {
    cursor: not-allowed;
  }
  @media ${(props) => props.theme.breakpoints.smAndSmaller} {
    padding: 0.4rem;
  }
`;
const DefaultInput = styled(BaseInput)``;

const Adornment = styled.span`
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-primary);
  background-color: var(--color-subtleBackground);
  @media ${(props) => props.theme.breakpoints.smAndSmaller} {
    padding: 0.4rem;
  }
`;
const TextAdornment = styled(Adornment)`
  background-color: gray;
`;
