import { AnimatedLink } from "components/modules";
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
    name: "Data",
    details:
      "The data economy is evolving expeditiously, bringing investment opportunities in network infrastructure, memory, storage and cybersecurity.",
    image: (
      <img
        src="/images/what-is-tab-data.gif"
        alt=""
        className="w-full object-cover"
      />
    ),
  },
  {
    name: "Future",
    details:
      "The data economy is evolving expeditiously, bringing investment opportunities in network infrastructure, memory, storage and cybersecurity.",
    image: (
      <video
        controls={false}
        autoPlay
        muted
        loop
        className="w-full object-cover"
      >
        <source src="/images/hand-glitch.webm" type="video/webm" />
      </video>
    ),
  },
  {
    name: "People",
    details:
      "The data economy is evolving expeditiously, bringing investment opportunities in network infrastructure, memory, storage and cybersecurity.",
    image: (
      <video
        controls={false}
        autoPlay
        muted
        loop
        className="w-full object-cover"
      >
        <source src="/images/what-is-tab-people.webm" type="video/webm" />
      </video>
    ),
  },
];

const MainSection = () => {
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
        <div className="flex justify-end w-full">
          <div className="w-full h-96 md:h-auto md:w-8/12 relative">
            <video
              controls={false}
              autoPlay
              muted
              loop
              className="w-full h-full object-cover opacity-50"
            >
              <source
                src="/images/what-is-d4data-cover.webm"
                type="video/webm"
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
        <div className="absolute inset-0 p-16 md:pt-20 flex items-center md:items-start">
          <h1 className="text-6xl md:text-7xl xl:text-9xl font-alt font-bold w-full text-center">
            What is D4DATA
          </h1>
        </div>
        <div className="block md:hidden px-8 py-4 absolute bottom-0 right-0 bg-theme-primary text-theme-base-content text-lg">
          <AnimatedLink text="discover" href="#" tagColor="bg-theme-base-100" />
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
              gradientWidth={60}
              gradientColor={[0, 0, 0]}
            >
              Data Centric Chain Agnostic Data Centric Chain Agnostic
            </Marquee>
          </div>
        </div>

        {/* Description */}
        <div className="flex-grow flex flex-col items-end justify-end pl-20 md:pl-60 h-full text-2xl md:text-3xl">
          <div className="max-w-2xl border-b border-theme-primary px-4 md:px-0 py-20 md:py-8 space-y-4">
            <p>
              We are doers, and it´s in our DNA to get things going, to pass the
              ball, and develop the game. Also, we have a hard time sitting
              still.
            </p>
            <p>
              Especially when it comes to watching friends and family missing
              out on opportunities because of lack of insight. You should feel
              the same
            </p>
          </div>
        </div>
      </div>

      {/* Toggles Section - Mobile version */}
      <div className="block max-w-sm mx-auto md:hidden my-8">
        <Carousel
          value={ToggleData}
          itemTemplate={CarouselItemTemplate}
          autoplayInterval={5000}
          bgIndicator="rgba(255, 255, 255, .5)"
          bgIndicatorSelected="rgba(241, 18, 56, 1)"
        ></Carousel>
        <div className="p-4">{ToggleData[toggleSelected].image}</div>
      </div>

      {/* Toggles Section - Desktop version */}
      <div className="hidden md:flex flex-row items-center justify-between space-x-8">
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
            <p className="text-4xl">The Power of</p>
            <div className="font-alt font-bold">
              <ToggleBoxes
                bgColor="bg-theme-primary"
                textColor="text-theme-base-100"
                selected={toggleSelected}
                text={ToggleData.map((t) => t.name)}
                onClick={handleToggleClick}
              />
            </div>
          </div>
          <p className="text-2xl max-w-lg lg:max-w-xl leading-tight text-theme-base-100">
            {ToggleData[toggleSelected].details}
          </p>
        </div>
        <div className="grow max-w-sm lg:max-w-xl">{ToggleData[toggleSelected].image}</div>
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
              Board Memebers Borard Members Board Memebers Borard Members
            </Marquee>
          </div>
        </div>

        {/* Description */}
        <div className="grow flex flex-col md:flex-row justify-between xl:justify-around pl-20 md:pl-52 pr-4 md:pr-40 text-2xl md:text-3xl space-y-16 h-full">
          <div className="flex flex-col items-end place-self-center md:place-self-start max-w-xs relative mt-20">
          <video
              controls={false}
              autoPlay
              muted
              loop
              className="object-cover h-full w-full"
            >
              <source src="/images/data-thomas-hepner.webm" type="video/webm" />
            </video>
            <p className="md:absolute md:bottom-0 md:right-0 text-xl md:text-3xl md:mb-5 md:-mr-12 z-20">
              Thomas Hepner
            </p>
          </div>
          <div className="flex flex-col items-end place-self-center md:place-self-end max-w-xs relative">
            <video
              controls={false}
              autoPlay
              muted
              loop
              className="object-cover h-full w-full"
            >
              <source src="/images/data-kiba-gateaux.webm" type="video/webm" />
            </video>
            <p className="md:absolute md:bottom-0 md:right-0 text-xl md:text-3xl md:mb-5 md:-mr-12">
              Kiba Gateaux
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
