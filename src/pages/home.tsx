/** @jsx createElement */
import { createElement } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const LandingStyle = styled.div`
  text-align: left;
`;

function Home() {
  const { t } = useTranslation("home.lang", { useSuspense: true });

  return (
    <LandingStyle>
      <h1>{t("title")}</h1>
      <p>{t("subtitle")}</p>
    </LandingStyle>
  );
}

export default Home;
