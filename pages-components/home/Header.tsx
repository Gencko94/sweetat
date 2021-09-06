import Flex from "@/components/Flex";
import LanguageToggle from "@/components/LanguageToggle";
import Logo from "@/components/Logo";
import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <Wrapper justify="space-between" items="center">
      <div className="logo-container">
        <Logo />
      </div>
      <LanguageToggle />
    </Wrapper>
  );
};
export default Header;
const Wrapper = styled(Flex)`
  .logo-container {
    height: 75px;
    width: 150px;
    min-width: 150px;
    position: relative;
    margin: 0 -20px;
    margin-left: calc(100vw - 70%);
    transform: translateX(-57%);
  }
  @media ${(props) => props.theme.breakpoints.smAndLarger} {
    .logo-container {
      height: 125px;
      width: 250px;
      margin-left: unset;
      transform: translateX(0);
    }
  }
`;
