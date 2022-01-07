import D4Dao from "./D4Dao";
import DataToken from "./DataToken";
import Header from "./Header";
import News from "./News";
import WhatIsD4Data from "./WhatIsD4Data";

export const LandingHomeTemplate = () => {
  return (
    <>
      <Header />
      <WhatIsD4Data />
      <D4Dao />
      <DataToken />
      <News />
    </>
  );
};
