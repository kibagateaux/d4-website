import { TFunction } from "next-i18next";

import { Container } from "components/elements";
import Header from "../Header";
import LandingFooter from "../Footer";
import MainSection from "./MainSection";

interface LandingD4DaoTemplateProps {
  t: TFunction;
}

export const LandingD4DaoTemplate = ({ t }: LandingD4DaoTemplateProps) => {
  return (
    <Container className="pb-12">
      <Header
        logo="/images/logo-dt.png"
        bgColor="text-white"
        textColor="text-black"
        bgSelectedColor="bg-black bg-opacity-70"
        textSelectedColor="text-white"
      />
      <MainSection />
      <LandingFooter
        tagsBg="bg-theme-primary-content"
        tagsColor="text-theme-primary"
        topTextColor="text-theme-primary"
      />
    </Container>
  );
};
