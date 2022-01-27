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
    <div className="flex-none w-24 lg:w-52 h-12 lg:h-20 ">
      <img
        src="/images/home-gif-what-is.gif"
        alt=""
        className=" w-full h-full object-cover"
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
  <p className="text-3xl mx-auto mb-4">{t("landing-home.what-is.details")}</p>
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
        <div
          className="py-8 px-4 max-w-xl mx-auto relative"
          style={{ backgroundColor: "#000" }}
        >
          <video controls={false} autoPlay muted loop className="w-full z-0">
            <source src="/images/the-power-of-people.webm" type="video/webm" />
          </video>
          <div className="flex items-center justify-end absolute w-full bottom-0 space-x-4 px-4 mb-24">
            <p className="text-3xl text-center w-44">{t("landing-home.what-is.slogan-1")}</p>
            <div className="bg-theme-primary text-white py-3 text-2xl font-alt font-bold flex items-center justify-center w-44">
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
        <div className="py-20 px-20">
          <div className="flex flex-col items-end relative">
            <div className="border-b border-theme-primary absolute bottom-72 -mb-1 w-full z-10"></div>

            <div className="py-20 grow px-4 space-y-12 max-w-xl absolute top-0 left-0">
              <Message t={t} />
              <AnimatedLink
                text={t("landing-home.learn-more")}
                href="/what-is-d4data"
              />
            </div>

            {/* Main content */}
            <div className="w-full py-12 relative flex justify-end">
              <video
                controls={false}
                autoPlay
                muted
                loop
                className="max-w-sm z-0"
              >
                <source
                  src="/images/the-power-of-people.webm"
                  type="video/webm"
                />
              </video>

              <div className="flex items-center justify-end absolute w-full bottom-0 space-x-4 px-4 mb-24">
                <p className="text-6xl">{t("landing-home.what-is.slogan-1")}</p>
                <div className="bg-theme-primary text-white px-8 py-5 text-5xl font-alt font-bold flex items-center justify-center w-80">
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
