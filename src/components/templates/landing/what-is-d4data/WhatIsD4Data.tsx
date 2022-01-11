import { TFunction } from "next-i18next";

import { Container } from "components/elements";

interface LandingWhatIsD4DataTemplateProps {
  t: TFunction;
}

export const LandingWhatIsD4DataTemplate = ({
  t,
}: LandingWhatIsD4DataTemplateProps) => {
  return (
    <Container className="py-12">
      <p className="text-6xl font-alt font-bold">What is D4DATA</p>
    </Container>
  );
};
