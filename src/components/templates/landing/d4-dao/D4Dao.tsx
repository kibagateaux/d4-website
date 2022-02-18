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
    <>
      <Header
        logo="/images/logo-d4.svg"
        bgColor="lg:bg-white lg:bg-opacity-50"
        textColor="text-black"
        bgSelectedColor="bg-black bg-opacity-70"
        textSelectedColor="text-white"
      />
      <MainSection t={t} />
      <LandingFooter
        tagsBg="bg-theme-primary-content"
        tagsColor="text-theme-primary"
        topTextColor="text-theme-primary"
      />
    </>
  );
};
