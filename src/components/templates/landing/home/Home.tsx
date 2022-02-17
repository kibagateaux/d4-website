import { TFunction } from "next-i18next";

import D4Dao from "./D4Dao";
import DataToken from "./DataToken";
import Footer from "../Footer";
import Header from "../Header";
import HeaderSection from "./Header";
import News from "./News";
import WhatIsD4Data from "./WhatIsD4Data";

interface LandingHomeTemplateProps {
  t: TFunction;
}

export const LandingHomeTemplate = ({ t }: LandingHomeTemplateProps) => {
  return (
    <>
      <Header
        bgColor="lg:bg-white lg:bg-opacity-50"
        textColor="text-theme-base-content"
      />
      <HeaderSection t={t} />
      <WhatIsD4Data t={t} />
      <D4Dao t={t} />
      <DataToken t={t} />
      <News />
      <Footer />
    </>
  );
};
