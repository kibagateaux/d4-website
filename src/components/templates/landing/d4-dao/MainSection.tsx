import { TFunction } from "next-i18next";
import { useRecoilState } from "recoil";
import { useState } from "react";
import Marquee from "react-fast-marquee";

import { AnimatedLink } from "components/modules";
import { Carousel } from "components/elements";
import { ElementBounds } from "models";
import { selectedItemHeaderAtom } from "../header-element.state";
import CarouselItemTemplate from "./CarouselItemTemplate";
import ToggleBoxes from "../ToggleBoxes";

const ToggleData = [
  {
    name: "landing-d4-dao.tg-1-name",
    details: "landing-d4-dao.tg-1-details",
  },
  {
    name: "landing-d4-dao.tg-2-name",
    details: "landing-d4-dao.tg-2-details",
  },
  {
    name: "landing-d4-dao.tg-3-name",
    details: "landing-d4-dao.tg-3-details",
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
      <div className="relative z-40">
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
              <source src="/images/d4dao-cover.mp4" type="video/mp4" />
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
            <div className="px-12 py-12 text-theme-base-100">
              <AnimatedLink
                text="discover"
                href="#"
                tagColor="bg-theme-primary"
              />
            </div>
          </div>
        )}
        <div className="absolute inset-0 p-16 md:pt-20 flex items-center md:items-start">
          <h1 className="text-6xl md:text-7xl xl:text-9xl font-alt font-bold w-full text-center lg:text-left lg:m-32 text-theme-base-100 md:text-theme-primary">
            {t("landing-d4-dao.title")}
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
              className="font-bold font-alt text-3xl md:text-6xl text-theme-primary overflow-hidden"
              speed={2}
              gradient={true}
              gradientWidth={250}
              gradientColor={[255, 255, 255]}
            >
              {t("landing-d4-dao.marquee-1")} {t("landing-d4-dao.marquee-1")}
            </Marquee>
          </div>
        </div>

        {/* Description */}
        <div className="flex-grow flex flex-col items-end justify-end pl-20 md:pl-60 h-full text-2xl md:text-3xl">
          <div className="max-w-2xl border-b border-theme-primary px-4 md:px-0 py-32 md:py-40 space-y-4">
            <p>{t("landing-d4-dao.description-p1")}</p>
            <p>{t("landing-d4-dao.description-p2")}</p>
          </div>
        </div>
      </div>

      {/* Toggles Section - Mobile version */}
      <div className="block max-w-sm mx-auto md:hidden my-8">
        <Carousel
          value={ToggleData.map(({ name, details }) => {
            return { name: t(name), details: t(details) };
          })}
          itemTemplate={CarouselItemTemplate}
          autoplayInterval={5000}
        ></Carousel>
        <div className="p-4">
          <img
            src="/images/d4dao-tab-defi.gif"
            alt=""
            className="w-full object-cover"
          />
        </div>
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
            <p className="text-4xl">{t("landing-d4-dao.dao-for")}</p>
            <div className="font-bold font-alt">
              <ToggleBoxes
                bgColor="bg-theme-primary"
                textColor="text-theme-base-100"
                selected={toggleSelected}
                text={ToggleData.map(({ name }) => t(name))}
                onClick={handleToggleClick}
              />
            </div>
          </div>
          <p className="text-2xl lg:text-3xl max-w-lg leading-tight text-theme-base-content-muted">
            {t(ToggleData[toggleSelected].details)}
          </p>
        </div>
        <div className="grow max-w-lg w-full h-full">
          <img
            src="/images/d4dao-tab-defi.gif"
            alt=""
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Marquee section 2 */}
      <div className="md:h-screen flex items-center justify-center relative overflow-hidden md:overflow-visible py-8 md:-mt-40">
        {/* Marquee */}
        <div className="flex-none w-10 md:w-20 h-screen absolute left-0 flex items-center justify-center overflow-hidden md:-mt-60">
          <div className="-rotate-90 opacity-80">
            <Marquee
              className="font-bold font-alt text-3xl md:text-6xl text-theme-primary overflow-hidden"
              speed={2}
              gradient={true}
              gradientWidth={100}
              gradientColor={[255, 255, 255]}
            >
              {t("landing-d4-dao.marquee-2")} {t("landing-d4-dao.marquee-2")}
            </Marquee>
          </div>
        </div>

        {/* Description */}
        <div className="grow flex items-center justify-center pl-20 md:pl-52 pr-4 h-full">
          <div className="py-12 max-w-4xl">
            <h2 className="text-4xl font-bold font-alt mb-12">
              {t("landing-d4-dao.description-2-title")}
            </h2>
            <p className="text-2xl md:text-3xl md:pl-20">
              {t("landing-d4-dao.description-2-details")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
