import { TFunction } from "next-i18next";

import { Container } from "components/elements";
import Footer from "../Footer";
import Header from "../Header";
import MainSection from "./MainSection";

interface LandingWhatIsD4DataTemplateProps {
  t: TFunction;
}

export const LandingWhatIsD4DataTemplate = ({
  t,
}: LandingWhatIsD4DataTemplateProps) => {
  return (
    <>
      <Header
        logo="/images/logo-wid.svg"
        bgColor="bg-black bg-opacity-70"
        textColor="text-theme-base-100"
      />
      <MainSection t={t} />
      <Footer
        tagsBg="bg-theme-primary"
        tagsColor="text-theme-primary-content"
        topTextColor="text-theme-base-100"
      />
    </>
  );
};
