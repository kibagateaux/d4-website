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
    <Container className="pb-12">
      <Header logo="/images/logo-wid.png" />
      <MainSection />
      <Footer
        tagsBg="bg-theme-primary"
        tagsColor="text-theme-primary-content"
      />
    </Container>
  );
};
