import { AnimatedLink } from "components/modules";
import { TFunction } from "next-i18next";
import { useRecoilState } from "recoil";
import { useState } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";

import { Carousel, Container } from "components/elements";
import { ElementBounds } from "models";
import { selectedItemHeaderAtom } from "../header-element.state";
import CarouselItemTemplate from "./CarouselItemTemplate";
import ToggleBoxes from "../ToggleBoxes";

const ToggleData = [
  {
    name: "landing-what-is-d4data.tg-1-name",
    details: "landing-what-is-d4data.tg-1-details",
    image: (
      <video
        key="what-is-tab-data.mp4"
        controls={false}
        autoPlay
        playsInline
        muted
        loop
        className="w-full object-cover"
      >
        <source src="/images/what-is-tab-data__.mp4" type="video/mp4" />
      </video>
    ),
  },
  {
    name: "landing-what-is-d4data.tg-2-name",
    details: "landing-what-is-d4data.tg-2-details",
    image: (
      <video
        key="what-is-tab-future.mp4"
        controls={false}
        autoPlay
        playsInline
        muted
        loop
        className="w-full object-cover"
      >
        <source src="/images/what-is-tab-future__.mp4" type="video/mp4" />
      </video>
    ),
  },
  {
    name: "landing-what-is-d4data.tg-3-name",
    details: "landing-what-is-d4data.tg-3-details",
    image: (
      <video
        key="what-is-tab-people.mp4"
        controls={false}
        autoPlay
        playsInline
        muted
        loop
        className="w-full object-cover"
      >
        <source src="/images/what-is-tab-people__.mp4" type="video/mp4" />
      </video>
    ),
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
    <section id="top" className="text-theme-base-100">
      {/* Header */}
      <div className="relative z-40">
        <div className="flex justify-end w-full h-96 lg:h-screen lg:-mt-16 lg:pt-16">
          <div className="w-full md:w-9/12 bg-black">
            <video
              controls={false}
              autoPlay
              playsInline
              muted
              loop
              className="w-full h-full object-cover opacity-50"
            >
              <source
                src="/images/what-is-d4data-cover__.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        {selectedItem && (
          <div
            className="absolute h-full top-0 bg-theme-primary opacity-90 hidden md:flex items-end justify-center transition duration-100 ease-in"
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
        <Container>
          <div className="absolute w-full top-0 bottom-0 py-16 px-10 md:pt-20 flex items-center md:items-start">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-alt font-bold w-full text-center lg:text-left lg:my-20">
              {t("landing-what-is-d4data.title")}
            </h1>
          </div>
        </Container>

        <div className="block md:hidden px-8 py-4 absolute bottom-0 right-0 bg-theme-primary text-theme-base-content text-lg">
          <AnimatedLink text="discover" href="#" tagColor="bg-theme-base-100" />
        </div>
      </div>

      <Container className="pb-12">
        {/* Marquee section 1 */}
        <div className="md:h-screen flex items-center justify-center relative overflow-hidden md:overflow-visible md:-mt-96">
          {/* Marquee */}
          <div className="flex-none w-10 md:w-20 h-screen absolute left-0 flex items-center justify-center overflow-hidden">
            <div className="-rotate-90 opacity-80">
              <Marquee
                className="font-bold font-alt text-3xl md:text-6xl text-theme-primary overflow-hidden"
                speed={2}
                gradient={true}
                gradientWidth={60}
                gradientColor={[0, 0, 0]}
              >
                {t("landing-what-is-d4data.marquee-1")}{" "}
                {t("landing-what-is-d4data.marquee-1")}
              </Marquee>
            </div>
          </div>

          {/* Description */}
          <div className="flex-grow flex flex-col items-end justify-end pl-20 md:pl-60 h-full text-2xl md:text-3xl">
            <div className="max-w-2xl border-b border-theme-primary px-4 md:px-0 py-20 md:py-8 space-y-4">
              <p>{t("landing-what-is-d4data.description-1")}</p>
              <p>{t("landing-what-is-d4data.description-2")}</p>
            </div>
          </div>
        </div>

        {/* Toggles Section - Mobile version */}
        <div className="block max-w-sm mx-auto md:hidden my-8">
          <Carousel
            value={ToggleData.map(({ image, name, details }) => {
              return { image, name: t(name), details: t(details) };
            })}
            itemTemplate={CarouselItemTemplate}
            autoplayInterval={5000}
            bgIndicator="rgba(255, 255, 255, .5)"
            bgIndicatorSelected="rgba(241, 18, 56, 1)"
          ></Carousel>
          <div className="p-4">{ToggleData[toggleSelected].image}</div>
        </div>

        {/* Toggles Section - Desktop version */}
        <div className="hidden md:flex flex-row items-center justify-between space-x-8 h-screen">
          <div className="grow py-12 space-y-12">
            <div
              className={`flex space-x-8 ${
                toggleSelected === 0
                  ? "items-start"
                  : toggleSelected === 1
                  ? "items-center"
                  : "items-end"
              }`}
            >
              <p className="text-4xl">
                {t("landing-what-is-d4data.the-power-of")}
              </p>
              <div className="font-alt font-bold">
                <ToggleBoxes
                  bgColor="bg-theme-primary"
                  textColor="text-theme-base-100"
                  selected={toggleSelected}
                  text={ToggleData.map(({ name }) => t(name))}
                  onClick={handleToggleClick}
                />
              </div>
            </div>
            <p className="text-2xl max-w-lg lg:max-w-xl leading-tight text-theme-base-100">
              {t(ToggleData[toggleSelected].details)}
            </p>
          </div>
          <div className="grow max-w-sm lg:max-w-xl">
            {ToggleData[toggleSelected].image}
          </div>
        </div>

        {/* Marquee section 2 */}
        <div className="md:h-screen flex items-center justify-center relative overflow-hidden md:overflow-visible py-8">
          {/* Marquee */}
          <div className="flex-none w-10 md:w-20 h-screen absolute left-0 flex items-center justify-center overflow-hidden md:-mt-60">
            <div className="-rotate-90 opacity-80">
              <Marquee
                className="font-bold font-alt text-3xl md:text-6xl text-theme-primary overflow-hidden"
                speed={2}
                gradient={true}
                gradientWidth={60}
                gradientColor={[0, 0, 0]}
              >
                {t("landing-what-is-d4data.marquee-2")}{" "}
                {t("landing-what-is-d4data.marquee-2")}{" "}
                {t("landing-what-is-d4data.marquee-2")}{" "}
                {t("landing-what-is-d4data.marquee-2")}
              </Marquee>
            </div>
          </div>

          {/* Description */}
          <div className="grow flex flex-col md:flex-row justify-between xl:justify-around pl-20 md:pl-52 pr-4 md:pr-40 text-2xl md:text-3xl space-y-16 h-full">
            <div className="flex flex-col items-end place-self-center md:place-self-start max-w-xs relative mt-20">
              <video
                controls={false}
                autoPlay
                playsInline
                muted
                loop
                className="object-cover h-full w-full"
              >
                <source
                  src="/images/data-thomas-hepner__.mp4"
                  type="video/mp4"
                />
              </video>
              <Link href={t("landing-what-is-d4data.name-1-twitter-url")}>
                <a
                  target="_blank"
                  className="md:absolute md:-bottom-16 md:-right-16 text-xl md:text-3xl z-20 mt-2"
                >
                  {t("landing-what-is-d4data.name-1")} <br />
                  <img
                    src="/images/twitter-frame.svg"
                    className="w-20"
                    alt=""
                  />
                </a>
              </Link>
            </div>
            <div className="flex flex-col items-end place-self-center md:place-self-end max-w-xs relative">
              <video
                controls={false}
                autoPlay
                playsInline
                muted
                loop
                className="object-cover h-full w-full"
              >
                <source
                  src="/images/data-kiba-gateaux__.mp4"
                  type="video/mp4"
                />
              </video>
              <Link href={t("landing-what-is-d4data.name-2-twitter-url")}>
                <a
                  target="_blank"
                  className="md:absolute md:-bottom-16 md:-right-16 text-xl md:text-3xl mt-2"
                >
                  {t("landing-what-is-d4data.name-2")} <br />
                  <img
                    src="/images/twitter-frame.svg"
                    className="w-20"
                    alt=""
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MainSection;
