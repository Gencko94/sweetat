import Flex from "@/components/Flex";
import Logo from "@/components/Logo";
import Spacer from "@/components/Spacer";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import appStore from "../../public/apple-badge-en.png";
import googlePlay from "../../public/google-badge-en.png";
const JoinUsLeftSide = () => {
  return (
    <LeftSide>
      <section>
        <div className="logo-container">
          <Logo />
        </div>
        <div className="title-container">
          <h1>Your favourite shops and takeaways, delivered to your door.</h1>
          <Spacer size={60} />
          <Flex justify="space-evenly" items="center">
            <Image
              src={appStore}
              alt="Download on App Store"
              width={200}
              height={75}
            />
            {/* <Spacer size={20} /> */}
            <Image
              src={googlePlay}
              alt="Download on Google play"
              width={200}
              height={75}
            />
          </Flex>
        </div>
        <NavLinks>
          <Flex as="ul" items="center" justify="space-between">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
            <Link href="/faq">
              <a>FAQ</a>
            </Link>
            <Link href="/tos">
              <a>Terms & Conditions</a>
            </Link>
            <Link href="/tos">
              <a>Careers</a>
            </Link>
          </Flex>
        </NavLinks>
      </section>
    </LeftSide>
  );
};

export default JoinUsLeftSide;
const LeftSide = styled.div`
  position: relative;
  &:before {
    position: absolute;
    content: " ";
    inset: 0;
    opacity: 0.4;
    background-image: url("vendor-bg.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }

  section {
    display: flex;
    flex-direction: column;
    max-width: 80%;
    margin: 0 auto;
    height: 100%;

    .logo-container {
      height: 125px;
      width: 250px;
      position: relative;
      display: inline-block;
    }
    .title-container {
      margin: 7rem 0;
      flex: 1;
      h1 {
        font-size: 50px;
        color: #fff;
        font-family: "Maven Pro", sans-serif;
      }
    }
  }
  @media ${(props) => props.theme.breakpoints.smAndSmaller} {
    display: none;
  }
`;
const NavLinks = styled.nav`
  margin: 1rem 0 3rem 0;
  a {
    transition: 100ms color ease-in;
  }
  a:hover {
    color: var(--color-primary) !important;
  }
`;
