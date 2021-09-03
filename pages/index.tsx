import type { NextPage } from "next";
import Image from "next/image";
import image from "../public/donut.png";
import styled from "styled-components";
import Link from "next/link";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Navbar />
      <Link href="/join-us">Go To Vendor</Link>
      <Donut>
        <Image src={image} />
      </Donut>
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
const Donut = styled.div`
  width: 200px;
  img {
    transform: rotate(-50deg);
    animation-duration: 20s;
    animation-iteration-count: infinite;
    /* animation-fill-mode: forwards; */
    animation-timing-function: ease-in-out;
    animation-direction: normal;
    animation-name: rotate;
  }

  /* height: 200px; */
`;
