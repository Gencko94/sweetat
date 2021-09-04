import Flex from "@/components/Flex";
import LanguageToggle from "@/components/LanguageToggle";
import Logo from "@/components/Logo";
import Spacer from "@/components/Spacer";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { JoinUsHeader } from "./JoinUsHeader";

const JoinUsLeftSide = () => {
  const { t } = useTranslation();
  return (
    <LeftSide>
      <section>
        <JoinUsHeader />
        <div className="title-container">
          <h1>{t("main-title")}</h1>
          <Spacer size={60} />
        </div>
        <Flex justify="flex-start" items="center">
          <img
            src="/assets/apple-badge-en.png"
            alt="Download on App Store"
            style={{
              width: "150px",
              height: "60px",
            }}
          />

          <img
            src="/assets/google-badge-en.png"
            alt="Download on Google play"
            style={{
              width: "150px",
              height: "60px",
            }}
          />
        </Flex>
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
    background-image: url("/assets/vendor-bg.jpg");
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
