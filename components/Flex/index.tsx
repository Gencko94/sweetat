import styled from "styled-components";
interface IProps extends React.ComponentPropsWithRef<"div"> {
  justify?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-evenly";
  direction?: "row" | "column";
  items?: "center" | "flex-start" | "flex-end";
  wrap?: "wrap" | "nowrap";
}
const Flex = styled.div<IProps>`
  display: flex;
  align-items: ${(props) => props.items};
  justify-content: ${(props) => props.justify};
  flex-direction: ${(props) => props.direction};
  flex-wrap: ${(props) => props.wrap};
`;

export default Flex;
