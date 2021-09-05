/* eslint-disable @next/next/no-img-element */
import Checkbox from "@/components/Checkbox";
import Flex from "@/components/Flex";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import MagicRainbowButton from "@/components/MagicRainbowButton";
import Paragraph from "@/components/Paragraph";
import Spacer from "@/components/Spacer";
import { useState } from "react";
import styled from "styled-components";

import { Trans, useTranslation } from "react-i18next";

import Header from "./Header";
import MobileStoreLinks from "./MobileStoreLinks";
const JoinUsForm = () => {
  const { t } = useTranslation();
  const [checked, setChecked] = useState(false);
  const handleCheck = () => {
    setChecked(!checked);
  };
  return (
    <Wrapper>
      <div className="header-wrapper">
        <Header />
      </div>
      <FormContainer className="join-us-form">
        <Heading tag="h2" type="normal-heading">
          {t("form-title")}
        </Heading>
        <Paragraph color="textAlt" weight="light">
          {t("form-subtitle")}
        </Paragraph>
        <Spacer size={40} />
        <Input label={t("business-name")} />
        <Spacer size={20} />
        <Input label={t("phone-number")} />
        <Spacer size={20} />
        <Input label={t("instagram")} />
        <Spacer size={20} />
        <Input label={t("email")} />
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
          <Spacer size={20} />
          <span>
            <Trans i18nKey="common:tos">
              I agree to all statements included in
              <a className="tos" href="/tos">
                TOS
              </a>
            </Trans>
          </span>
        </Flex>
        <Spacer size={20} />
        <Flex justify="center">
          <MagicRainbowButton>SUBMIT</MagicRainbowButton>
        </Flex>
        <Donut>
          <img src="/assets/donut.png" alt="rotating-donut" />
        </Donut>
      </FormContainer>
      <div className="footer-wrapper">
        <MobileStoreLinks />
      </div>
    </Wrapper>
  );
};

export default JoinUsForm;

const Wrapper = styled.div`
  padding: 3rem;
  .tos {
    color: var(--color-primary);
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .header-wrapper,
  .footer-wrapper {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.smAndSmaller} {
    .header-wrapper {
      margin-bottom: 1rem;
      display: block;
    }
    .footer-wrapper {
      display: block;

      margin: 2rem 0;
    }
    padding: 0 2rem;
  }
`;
const FormContainer = styled.div`
  background-color: var(--color-subtleFloating);
  padding: 2rem 1.5rem;
  border-radius: var(--border-radius);
  position: relative;

  @media ${(props) => props.theme.breakpoints.smAndSmaller} {
    padding: 1rem;
  }

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
    inset: 0;

    width: calc(100% + 1px);
    height: calc(100% + 1px);
    background-size: 400%;
    z-index: -1;
    transform: translateZ(0);

    animation: shadow 30s linear infinite;
  }
  &::after {
    filter: blur(10px);
  }
`;
const Donut = styled.div`
  width: 60px;
  position: absolute;
  right: -30px;
  top: -30px;
  img {
    animation: rotate 20s linear infinite;
  }
  @media ${(props) => props.theme.breakpoints.smAndSmaller} {
    width: 45px;
    right: -22px;
    top: -22px;
  }
`;
