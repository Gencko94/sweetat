import type { NextPage } from "next";

import styled from "styled-components";
import Link from "next/link";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Navbar />
      <Link href="/join-us">Go To Vendor</Link>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100vh;
  background-image: url("background1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
