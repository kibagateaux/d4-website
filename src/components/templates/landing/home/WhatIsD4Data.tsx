import { TFunction } from "next-i18next";
import Marquee from "react-fast-marquee";

import { AnimatedLink, TypeAnimation } from "components/modules";
import { Container } from "components/elements";

const Header = ({ t }: { t: TFunction }) => (
  <div className="flex space-x-2 lg:space-x-4">
    <div
      className="flex items-center justify-center grow text-theme-base-100 relative overflow-hidden p-0"
      style={{ backgroundColor: "#303030" }}
    >
      <Marquee
        gradient={false}
        className="absolute font-alt font-bold text-4xl lg:text-6xl truncate tracking-widest py-2"
      >
        <span className="pr-16">{t("landing-home.what-is.header-1")}</span>
        <span>{t("landing-home.what-is.header-1")}</span>
      </Marquee>
    </div>
    <div className="flex-none w-52">
      <img
        src="/images/what-is-d4-data-header.png"
        alt=""
        className="h-12 lg:h-full object-cover"
      />
    </div>
    <div
      className="flex items-center justify-center grow text-theme-base-100 relative overflow-hidden p-0"
      style={{ backgroundColor: "#303030" }}
    >
      <Marquee
        gradient={false}
        className="absolute font-alt font-bold text-4xl lg:text-6xl truncate tracking-widest py-2"
      >
        <span className="pr-16">{t("landing-home.what-is.header-2")}</span>
        <span>{t("landing-home.what-is.header-2")}</span>
      </Marquee>
    </div>
  </div>
);

const Message = ({ t }: { t: TFunction }) => (
  <p className="text-3xl mx-auto">{t("landing-home.what-is.details")}</p>
);

interface WhatIsD4DataProps {
  t: TFunction;
}

const WhatIsD4Data = ({ t }: WhatIsD4DataProps) => {
  return (
    <section
      id="what-is-d4data"
      className="bg-theme-base-content text-theme-base-100 pt-12"
    >
      {/* Mobile view */}
      <div className="flex flex-col justify-center xl:hidden space-y-6 px-4 py-12 mx-auto">
        <Header t={t} />
        <div className="py-8 px-12" style={{ backgroundColor: "#000" }}>
          <img
            src="/images/what-is-d4-data.png"
            alt=""
            className="w-full max-w-xl mx-auto"
          />
          <div className="flex items-center justify-end space-x-4 -mt-40 -mr-8 mb-24">
            <p className="text-3xl">{t("landing-home.what-is.slogan-1")}</p>
            <div className="bg-theme-primary text-white px-8 py-2 text-3xl font-alt font-bold">
              <TypeAnimation
                text={[t("landing-home.what-is.slogan-2"), "Other", "Another"]}
              />
            </div>
          </div>
        </div>

        <Message t={t} />
        <div className="w-full flex justify-end pt-8 pr-8">
          <AnimatedLink
            text={t("landing-home.learn-more")}
            href="/what-is-d4data"
          />
        </div>
      </div>

      {/* Desktop view */}
      <Container className="hidden xl:block">
        <Header t={t} />
        <div
          className="bg-no-repeat bg-right py-20 px-20 bg-origin-content"
          style={{ backgroundImage: "url(/images/what-is-d4-data.png)" }}
        >
          <div className="flex flex-col items-start divide-y divide-theme-primary">
            <div className="py-20 px-4 flex-1 max-w-xl 2xl:max-w-4xl space-y-12">
              <Message t={t} />
              <AnimatedLink
                text={t("landing-home.learn-more")}
                href="/what-is-d4data"
              />
            </div>
            {/* Main content */}
            <div className="w-full py-12">
              <div className="flex items-center justify-end space-x-8 -mr-8">
                <p className="text-6xl">{t("landing-home.what-is.slogan-1")}</p>
                <div className="bg-theme-primary text-white px-12 py-5 text-5xl font-alt font-bold">
                  <TypeAnimation
                    text={[
                      t("landing-home.what-is.slogan-2"),
                      "Other",
                      "Another",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhatIsD4Data;
