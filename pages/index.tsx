import type { NextPage } from "next";

import styled from "styled-components";
import DarkModeToggle from "../components/DarkModeToggle";

const Home: NextPage = () => {
  return (
    <>
      <H1>Hello</H1>
      <DarkModeToggle />
    </>
  );
};

export default Home;
const H1 = styled.h1`
  color: var(--color-text);
`;
