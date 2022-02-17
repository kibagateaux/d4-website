import { AnimatedLink } from "components/modules";
import { TFunction } from "next-i18next";
import { useRecoilState } from "recoil";
import { useState } from "react";
import Marquee from "react-fast-marquee";

import { Carousel } from "components/elements";
import { ElementBounds } from "models";
import { selectedItemHeaderAtom } from "../header-element.state";
import CarouselItemTemplate from "./CarouselItemTemplate";
import ToggleBoxes from "../ToggleBoxes";

const ToggleData = [
  {
    name: "landing-data-token.tg-1-name",
    details: "landing-data-token.tg-1-details",
    source: "/images/token-tab-simple__.mp4",
  },
  {
    name: "landing-data-token.tg-2-name",
    details: "landing-data-token.tg-2-details",
    source: "/images/token-tab-transparency__.mp4",
  },
  {
    name: "landing-data-token.tg-3-name",
    details: "landing-data-token.tg-3-details",
    source: "/images/token-tab-efficient__.mp4",
  },
  {
    name: "landing-data-token.tg-4-name",
    details: "landing-data-token.tg-4-details",
    source: "/images/token-tab-diversity__.mp4",
  },
  {
    name: "landing-data-token.tg-5-name",
    details: "landing-data-token.tg-5-details",
    source: "/images/token-tab-unique__.mp4",
  },
];

interface MainSectionProps {
  t: TFunction;
}

const MainSection = ({ t }: MainSectionProps) => {
  const [toggleSelected, setToggleSelected] = useState(1);
  const [selectedItem] = useRecoilState<ElementBounds | null>(
    selectedItemHeaderAtom
  );

  const handleToggleClick = (index: number) => {
    setToggleSelected(index);
  };

  return (
    <section id="top" className="text-theme-base-content">
      {/* Header */}
      <div className="relative z-40 text-theme-base-100">
        <div className="flex justify-end w-full h-96 lg:h-screen lg:-mt-16 lg:pt-16">
          <div className="w-full md:w-10/12 bg-black">
            <video
              controls={false}
              autoPlay
              playsInline
              muted
              loop
              className="w-full h-full object-cover opacity-90"
            >
              <source src="/images/token-cover__.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        {selectedItem && (
          <div
            className="absolute h-full top-0 bg-theme-base-content opacity-90 hidden md:flex items-end justify-center transition duration-100 ease-in"
            style={{
              left: `${selectedItem?.left}px`,
              width: `${selectedItem?.width}px`,
            }}
          >
            <div className="px-12 py-12">
              <AnimatedLink
                text="discover"
                href="#"
                tagColor="bg-theme-base-100"
              />
            </div>
          </div>
        )}
        <div className="absolute inset-0 py-16 px-16 md:px-4 md:pt-20 flex items-center md:items-start">
          <h1 className="text-6xl md:text-8xl xl:text-9xl font-alt font-bold w-full text-center lg:text-left lg:m-32">
            {t("landing-data-token.title")}
          </h1>
        </div>
        <div className="block md:hidden px-8 py-4 absolute bottom-0 right-0 bg-theme-base-content text-theme-base-100 text-lg">
          <AnimatedLink text="discover" href="#" tagColor="bg-theme-primary" />
        </div>
      </div>

      {/* Marquee section 1 */}
      <div className="md:h-screen flex items-center justify-center relative overflow-hidden md:overflow-visible md:-mt-96">
        {/* Marquee */}
        <div className="flex-none w-10 md:w-20 h-screen absolute left-0 flex items-center justify-center overflow-hidden">
          <div className="-rotate-90 opacity-80">
            <Marquee
              className="font-bold font-alt text-3xl md:text-6xl text-theme-base-content overflow-hidden"
              speed={2}
              gradient={true}
              gradientWidth={50}
              gradientColor={[241, 18, 56]}
            >
              {t("landing-data-token.marquee-1")}{" "}
              {t("landing-data-token.marquee-1")}
            </Marquee>
          </div>
        </div>

        {/* Description */}
        <div className="flex-grow flex flex-col items-end justify-end pl-20 md:pl-60 h-full text-2xl md:text-3xl">
          <div className="max-w-2xl border-b border-theme-primary px-4 md:px-0 py-32 md:py-40 space-y-4">
            <p>{t("landing-data-token.description")}</p>
          </div>
        </div>
      </div>

      {/* Toggles Section - Mobile version */}
      <div className="block max-w-sm mx-auto md:hidden">
        <Carousel
          value={ToggleData.map(({ source, name, details }) => {
            return { source, name: t(name), details: t(details) };
          })}
          itemTemplate={CarouselItemTemplate}
          autoplayInterval={5000}
        ></Carousel>
      </div>

      {/* Toggles Section - Desktop version */}
      <div className="hidden md:flex flex-row items-center justify-between space-x-8 h-screen">
        <div className="grow py-12 space-x-12 flex items-end">
          <ToggleBoxes
            bgColor="bg-theme-base-content"
            textColor="text-theme-base-100"
            selected={toggleSelected}
            text={ToggleData.map(({ name }) => t(name))}
            onClick={handleToggleClick}
          />
          <p className="text-3xl max-w-md leading-tight">
            {t(ToggleData[toggleSelected].details)}
          </p>
        </div>
        <div className="grow max-w-lg w-full h-full">
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
            <img
              src={ToggleData[toggleSelected].source}
              alt=""
              className="w-full object-cover"
            />
          )}
        </div>
      </div>

      {/* Marquee section 2 */}
      <div className="md:h-screen flex items-center justify-center relative overflow-hidden md:overflow-visible py-8">
        {/* Marquee */}
        <div className="flex-none w-10 md:w-20 h-screen absolute left-0 flex items-center justify-center overflow-hidden md:-mt-60">
          <div className="-rotate-90 opacity-80">
            <Marquee
              className="font-bold font-alt text-3xl md:text-6xl text-theme-base-content overflow-hidden"
              speed={2}
              gradient={true}
              gradientWidth={50}
              gradientColor={[241, 18, 56]}
            >
              {t("landing-data-token.marquee-2")}{" "}
              {t("landing-data-token.marquee-2")}
            </Marquee>
          </div>
        </div>

        {/* Description */}
        <div className="grow flex items-center justify-center pl-20 md:pl-52 pr-4 h-full">
          <div className="py-12 max-w-4xl">
            <h2 className="text-4xl font-bold font-alt mb-12">
              {t("landing-data-token.description-2-title")}
            </h2>
            <div className="flex flex-col w-full items-start space-y-16 md:pl-20">
              <p className="text-2xl md:text-3xl">
                {t("landing-data-token.description-2-details")}
              </p>
              <AnimatedLink
                text="discover more"
                target="_blank"
                href={t("landing-data-token.description-url")}
                tagColor="bg-black"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
