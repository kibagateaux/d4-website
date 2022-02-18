import { TFunction } from "next-i18next";

import { AnimatedLink } from "components/modules";
import { Carousel, Container } from "components/elements";
import ToggleBoxes from "../ToggleBoxes";
import { useState } from "react";
import CarouselItemTemplate from "./CarouselItemTemplate";

const ToggleData = [
  {
    name: "landing-home.data-token.tg-1-name",
    details: "landing-home.data-token.tg-1-details",
    source: "/images/token-tab-simple__.mp4",
  },
  {
    name: "landing-home.data-token.tg-2-name",
    details: "landing-home.data-token.tg-2-details",
    source: "/images/token-tab-transparency__.mp4",
  },
  {
    name: "landing-home.data-token.tg-3-name",
    details: "landing-home.data-token.tg-3-details",
    source: "/images/token-tab-efficient__.mp4",
  },
  {
    name: "landing-home.data-token.tg-4-name",
    details: "landing-home.data-token.tg-4-details",
    source: "/images/token-tab-diversity__.mp4",
  },
  {
    name: "landing-home.data-token.tg-5-name",
    details: "landing-home.data-token.tg-5-details",
    source: "/images/token-tab-unique__.mp4",
  },
];

const Header = ({ t }: { t: TFunction }) => (
  <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-x-8 mb-12 z-10">
    <img src="/images/logo_alt.svg" alt="" className="w-20 lg:w-24" />
    <p className="text-white text-3xl lg:text-6xl">
      {t("landing-home.data-token.header")}
    </p>
  </div>
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
        <div className="flex flex-col justify-center lg:hidden max-w-sm mx-auto">
          <img
            src="/images/logo_alt.svg"
            alt=""
            className="w-20 mx-auto"
          />
          <Carousel
            value={ToggleData.map(({ source, name, details }) => {
              return { source, name: t(name), details: t(details) };
            })}
            itemTemplate={CarouselItemTemplate}
            autoplayInterval={5000}
          ></Carousel>

          <div className="w-full flex justify-center pt-8 pr-8">
            <AnimatedLink
              text={t("landing-home.learn-more")}
              href="/data-token"
              tagColor="bg-theme-base-content"
            />
          </div>
        </div>

        {/* Desktop view */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-end relative">
            <div className="border-b border-theme-base-content absolute bottom-64 -mb-4 w-full z-10"></div>
            <div className="max-w-sm xl:max-w-md flex justify-end items-center h-screen">
              {ToggleData[toggleSelected].source.indexOf("mp4") >= 0 ? (
                <video
                  key={ToggleData[toggleSelected].source}
                  controls={false}
                  autoPlay
                  playsInline
                  muted
                  loop
                  className="w-full object-cover"
                >
                  <source
                    src={ToggleData[toggleSelected].source}
                    type="video/mp4"
                  />
                </video>
              ) : (
                <div className="w-screen">
                  <img
                    src={ToggleData[toggleSelected].source}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            <div className="absolute left-0 top-40 flex flex-col max-w-2xl xl:max-w-4xl">
              <div className="px-12 pb-20">
                <Header t={t} />

                {/* Main content */}
                <div className="flex items-end space-x-4">
                  <ToggleBoxes
                    bgColor="bg-theme-base-content"
                    textColor="text-theme-base-100"
                    selected={toggleSelected}
                    text={ToggleData.map((data) => t(data.name))}
                    onClick={(selected: number) => setToggleSelected(selected)}
                  />
                  <div className="px-8 text-3xl py-8 flex-1">
                    {t(ToggleData[toggleSelected].details)}
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
        </div>
      </Container>
    </section>
  );
};

export default DataToken;
