import Image from "next/image";
import styled from "styled-components";
import logo from "../../public/newLogo.png";

const Logo = styled(Image).attrs(() => ({
  src: logo,
  alt: "Sweetat logo",
  layout: "fill",
}))``;
export default Logo;
