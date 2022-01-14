import { TFunction } from "next-i18next";

import { AnimatedLink } from "components/modules";
import { Container } from "components/elements";
import ToggleBoxes from "../ToggleBoxes";
import { useState } from "react";

const ToggleData = [
  {
    name: "Simple",
    details: "Single token exposure with automated rebalancing and additions",
  },
  {
    name: "Data",
    details:
      "The data economy is envolving expeditiously, bringing investment opportunities in network infraestructure, memory, storage and cybersecurity.",
  },
  {
    name: "Other Data",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Example",
    details:
      "Ipsam eos est iusto expedita aliquid sint facere dolores ratione error voluptates.",
  },
  {
    name: "Another Example",
    details:
      " Consequuntur mollitia iusto deserunt doloribus et obcaecati inventore repudiandae! Mollitia!",
  },
];

const Header = ({ t }: { t: TFunction }) => (
  <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-x-8 mb-12 z-10">
    <img src="/images/token-data-logo.png" alt="" className="w-20 lg:w-24" />
    <p className="text-white text-3xl lg:text-6xl">
      {t("landing-home.data-token.header")}
    </p>
  </div>
);

const Message = ({ t }: { t: TFunction }) => (
  <p className="text-3xl">{t("landing-home.data-token.details")}</p>
);

interface DataTokenProps {
  t: TFunction;
}

const DataToken = ({ t }: DataTokenProps) => {
  const [toggleSelected, setToggleSelected] = useState(0);

  return (
    <section
      id="data-token"
      className="bg-theme-primary text-theme-primary-content py-20 px-4"
    >
      <Container>
        {/* Mobile view */}
        <div className="flex flex-col justify-center xl:hidden max-w-xl mx-auto">
          <Header t={t} />
          <div className="relative -mt-24 lg:mt-0 z-0 mb-8">
            <img
              src="/images/token-data-bg.png"
              alt=""
              className="w-full max-w-sm mx-auto"
            />
            <div className="absolute bottom-0 left-0 mb-10 -ml-4">
              <ToggleBoxes
                bgColor="bg-theme-base-content"
                textColor="text-theme-base-100"
                selected={0}
                text={[ToggleData[toggleSelected].name]}
                onClick={() => {}}
              />
            </div>
          </div>
          <p className="text-2xl">{[ToggleData[toggleSelected].details]}</p>
          <div className="w-full flex justify-end pt-8 pr-8">
            <AnimatedLink
              text={t("landing-home.learn-more")}
              href="/data-token"
              tagColor="bg-theme-base-content"
            />
          </div>
        </div>

        {/* Desktop view */}
        <div
          className="bg-no-repeat bg-right hidden xl:block"
          style={{ backgroundImage: "url(/images/token-data-bg.png)" }}
        >
          <div className="flex flex-col divide-y divide-theme-primary-content">
            <div className="px-12 pb-20">
              <Header t={t} />

              {/* Main content */}
              <div className="flex items-end space-x-8">
                <ToggleBoxes
                  bgColor="bg-theme-base-content"
                  textColor="text-theme-base-100"
                  selected={toggleSelected}
                  text={ToggleData.map((t) => t.name)}
                  onClick={(selected: number) => setToggleSelected(selected)}
                />
                <div className="px-12 text-2xl py-8 flex-1 max-w-xl 2xl:max-w-xl">
                  {ToggleData[toggleSelected].details}
                </div>
              </div>
            </div>
            <div className="px-12 py-20">
              <AnimatedLink
                text={t("landing-home.learn-more")}
                href="/data-token"
                tagColor="bg-theme-base-content"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DataToken;
