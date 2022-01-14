import { TFunction } from "next-i18next";

import { Container } from "components/elements";
import Header from "../Header";

interface LandingDataTokenTemplateProps {
  t: TFunction;
}

export const LandingDataTokenTemplate = ({
  t,
}: LandingDataTokenTemplateProps) => {
  return (
    <Container className="pb-12">
      <Header logo="/images/logo-dt.png" />
      <p className="text-6xl font-alt font-bold">$DATA Token</p>
    </Container>
  );
};
