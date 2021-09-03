import styled from "styled-components";
import { COLORS, WEIGHTS } from "../../constants";

interface IProps extends React.ComponentPropsWithRef<"p"> {
  color?: COLORS;
  weight?: WEIGHTS;
}

const Paragraph = styled.p<IProps>`
  color: ${(props) => `var(--color-${props.color || "text"})`};
  font-weight: ${(props) => props.theme.font[props.weight || "semibold"]};
`;
export default Paragraph;
