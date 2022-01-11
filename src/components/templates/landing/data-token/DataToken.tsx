import { TFunction } from "next-i18next";

import { Container } from "components/elements";

interface LandingDataTokenTemplateProps {
  t: TFunction;
}

export const LandingDataTokenTemplate = ({
  t,
}: LandingDataTokenTemplateProps) => {
  return (
    <Container className="py-12">
      <p className="text-6xl font-alt font-bold">$DATA Token</p>
    </Container>
  );
};
