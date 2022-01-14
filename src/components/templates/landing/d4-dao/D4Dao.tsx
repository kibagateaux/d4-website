import { TFunction } from "next-i18next";

import { Container } from "components/elements";
import Header from "../Header";

interface LandingD4DaoTemplateProps {
  t: TFunction;
}

export const LandingD4DaoTemplate = ({ t }: LandingD4DaoTemplateProps) => {
  return (
    <Container className="pb-12">
      <Header />
      <p className="text-6xl font-alt font-bold">D4 DAO</p>
    </Container>
  );
};
