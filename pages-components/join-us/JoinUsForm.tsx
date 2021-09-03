import Checkbox from "@/components/Checkbox";
import Flex from "@/components/Flex";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import MagicRainbowButton from "@/components/MagicRainbowButton";
import Paragraph from "@/components/Paragraph";
import Spacer from "@/components/Spacer";
import { useState } from "react";
import styled from "styled-components";

const JoinUsForm = () => {
  const [checked, setChecked] = useState(false);
  const handleCheck = () => {
    setChecked(!checked);
  };
  return (
    <Wrapper>
      <FormContainer className="join-us-form">
        <Heading tag="h2" type="normal-heading">
          Are you a restaurant owner and wish to join hundrends of sweets
          restaurants from around the Kuwait ?
        </Heading>
        <Paragraph color="textAlt" weight="light">
          Provide your restaurant information and we will contact you soon.
        </Paragraph>
        <Spacer size={40} />
        <Input label="Restaurant Name" />
        <Spacer size={20} />
        <Input label="Phone Number" />
        <Spacer size={20} />
        <Input label="Instagram " />
        <Spacer size={20} />
        <Input label="Email " />
        <Spacer size={40} />
        <Flex as="label" items="center" justify="center">
          <span
            style={{
              flexBasis: "10%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Checkbox checked={checked} handleCheck={handleCheck} />
          </span>
          <Spacer size={20} />I agree to all statements included in Terms Of
          Use.
        </Flex>
        <Spacer size={20} />
        <Flex justify="center">
          <MagicRainbowButton>SUBMIT</MagicRainbowButton>
        </Flex>
        <Donut>
          <img src="/donut.png" alt="rotating-donut" />
        </Donut>
      </FormContainer>
    </Wrapper>
  );
};

export default JoinUsForm;
const Wrapper = styled.div`
  padding: 3rem;
  @media ${(props) => props.theme.breakpoints.smAndSmaller} {
    padding: 2rem;
  }
`;
const FormContainer = styled.div`
  background-color: var(--color-subtleFloating);
  padding: 2rem 1.5rem;
  border-radius: var(--border-radius);
  @media ${(props) => props.theme.breakpoints.smAndSmaller} {
    padding: 1rem;
  }
  /* position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    will-change: background;
    border-radius: 12px;
    background: linear-gradient(
      45deg,
      hsl(336deg 95% 62%),
      hsl(26deg 95% 60%),
      cyan,
      hsl(8deg 94% 66%)
    );
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    background-size: 400%;
    z-index: -1;
    transform: translateZ(0);

    animation: shadow 30s linear infinite;
  }
  &::after {
    filter: blur(10px);
  } */
`;
const Donut = styled.div`
  width: 70px;
  position: absolute;
  right: 15px;
  top: 15px;
  img {
    animation: rotate 20s linear infinite;
  }
  @media ${(props) => props.theme.breakpoints.smAndSmaller} {
    width: 50px;
  }
`;
