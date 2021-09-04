import Flex from "@/components/Flex";
import LanguageToggle from "@/components/LanguageToggle";
import Logo from "@/components/Logo";
import React from "react";
import styled from "styled-components";

export const JoinUsHeader = () => {
  return (
    <Wrapper justify="space-between" items="center">
      <div className="logo-container">
        <Logo />
      </div>
      <LanguageToggle />
    </Wrapper>
  );
};
const Wrapper = styled(Flex)`
  .logo-container {
    height: 75px;
    width: 150px;
    position: relative;
    display: inline-block;
    margin: 0 -20px;
  }
  @media ${(props) => props.theme.breakpoints.smAndLarger} {
    .logo-container {
      height: 125px;
      width: 250px;
    }
  }
`;
