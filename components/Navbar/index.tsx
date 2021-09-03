import DarkModeToggle from "../DarkModeToggle";
import Image from "next/image";
import styled from "styled-components";
import NavLinks from "./NavLinks";
import Logo from "../Logo";
const Navbar = () => {
  return (
    <Wrapper>
      <DarkModeToggle />
      {/* <Logo /> */}
      <NavLinks />
    </Wrapper>
  );
};

export default Navbar;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
