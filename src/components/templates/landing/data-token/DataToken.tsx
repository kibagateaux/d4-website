import { TFunction } from "next-i18next";

import { Container } from "components/elements";
import Footer from "../Footer";
import Header from "../Header";
import MainSection from "./MainSection";

interface LandingDataTokenTemplateProps {
  t: TFunction;
}

export const LandingDataTokenTemplate = ({
  t,
}: LandingDataTokenTemplateProps) => {
  return (
    <Container className="pb-12">
      <Header
        logo="/images/logo-dt.png"
        bgColor="text-black"
        textColor="text-theme-base-100"
        bgSelectedColor="bg-black bg-opacity-70"
        textSelectedColor="text-theme-base-100"
      />
      <MainSection />
      <Footer
        tagsBg="bg-theme-primary-content"
        tagsColor="text-theme-primary"
      />
    </Container>
  );
};
