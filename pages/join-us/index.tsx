import styled from "styled-components";

import JoinUsLeftSide from "pages-components/join-us/JoinUsLeftSide";
import JoinUsForm from "pages-components/join-us/JoinUsForm";
import { Meta } from "@/components/Meta";
import { AppConfig } from "utils/AppConfig";
const JoinUsPage = () => {
  return (
    <Wrapper>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <JoinUsLeftSide />
      <JoinUsForm />
    </Wrapper>
  );
};

export default JoinUsPage;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.7fr;
  height: 100vh;
  max-height: 100vh;
  @media ${(props) => props.theme.breakpoints.smAndSmaller} {
    grid-template-columns: 1fr;
  }
`;
