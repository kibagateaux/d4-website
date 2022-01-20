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
    name: "Data 0",
    details:
      "The data economy is evolving expeditiously, bringing investment opportunities in network infrastructure, memory, storage and cybersecurity.",
  },
  {
    name: "Data",
    details:
      "The data economy is evolving expeditiously, bringing investment opportunities in network infrastructure, memory, storage and cybersecurity.",
  },
  {
    name: "Data 2",
    details:
      "The data economy is evolving expeditiously, bringing investment opportunities in network infrastructure, memory, storage and cybersecurity.",
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
    <section className="text-theme-base-100">
      {/* Header */}
      <div className="relative z-40">
        <div className="flex justify-end w-full">
          <div className="w-full h-96 md:h-auto md:w-10/12 relative">
            <img
              src="/images/dao-d4-bg.png"
              alt=""
              className="w-full h-full object-cover opacity-50"
            />
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
              We are doers, and it's in our DNA to get things going, to pass the
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
        <div className="p-4">
          <img
            src="/images/what-is-d4-data-image-2.png"
            alt=""
            className="w-full object-cover"
          />
        </div>
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
            <p className="text-4xl">DAO for</p>
            <ToggleBoxes
              bgColor="bg-theme-primary"
              textColor="text-theme-base-100"
              selected={toggleSelected}
              text={ToggleData.map((t) => t.name)}
              onClick={handleToggleClick}
            />
          </div>
          <p className="text-2xl max-w-md leading-tight text-theme-base-content-muted">
            {ToggleData[toggleSelected].details}
          </p>
        </div>
        <div className="grow max-w-sm">
          <img
            src="/images/what-is-d4-data-image-2.png"
            alt=""
            className="w-full object-cover"
          />
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
              Board Memebers Borard Members Board Memebers Borard Members
            </Marquee>
          </div>
        </div>

        {/* Description */}
        <div className="grow flex flex-col md:flex-row justify-between pl-20 md:pl-52 pr-4 md:pr-40 text-2xl md:text-3xl space-y-16 h-full">
          <div className="flex flex-col items-end place-self-start mt-20 md:mt-60">
            <img
              src="/images/wid-people-1.png"
              alt=""
              className="object-cover h-full w-full"
            />
            <p className="text-xl md:text-3xl md:-mt-10 md:-mr-24">
              Thomas Hepner
            </p>
          </div>
          <div className="flex flex-col items-end place-self-end">
            <img
              src="/images/wid-people-2.png"
              alt=""
              className="object-cover h-full w-full"
            />
            <p className="text-xl md:text-3xl md:-mt-10 md:-mr-24">
              Kiba Gateaux
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
