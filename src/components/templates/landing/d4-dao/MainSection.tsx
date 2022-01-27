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
    name: "Simple",
    details:
      "The data economy is evolving expeditiously, bringing investment opportunities in network infrastructure, memory, storage and cybersecurity.",
  },
  {
    name: "DeFi",
    details:
      "The data economy is evolving expeditiously, bringing investment opportunities in network infrastructure, memory, storage and cybersecurity.",
  },
  {
    name: "Other Data",
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
    <section id="top" className="text-theme-base-content">
      {/* Header */}
      <div className="relative z-40">
        <div className="flex justify-end w-full h-96 lg:h-screen lg:-mt-16 lg:pt-16">
          <div className="w-full md:w-10/12 bg-black">
            <video
              controls={false}
              autoPlay
              muted
              loop
              className="w-full h-full object-cover opacity-90"
            >
              <source src="/images/d4dao-cover.webm" type="video/webm" />
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
            D4 DAO
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
              Mainstream Empowerment Mainstream Empowerment
            </Marquee>
          </div>
        </div>

        {/* Description */}
        <div className="flex-grow flex flex-col items-end justify-end pl-20 md:pl-60 h-full text-2xl md:text-3xl">
          <div className="max-w-2xl border-b border-theme-primary px-4 md:px-0 py-32 md:py-40 space-y-4">
            <p>DAOs give direct power to the people.</p>
            <p>
              Join us in pioneering a future where magic internet communities
              unlock the power of human-centric coordination.
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
            <p className="text-4xl">DAO for</p>
            <div className="font-bold font-alt">
              <ToggleBoxes
                bgColor="bg-theme-primary"
                textColor="text-theme-base-100"
                selected={toggleSelected}
                text={ToggleData.map((t) => t.name)}
                onClick={handleToggleClick}
              />
            </div>
          </div>
          <p className="text-2xl lg:text-3xl max-w-lg leading-tight text-theme-base-content-muted">
            {ToggleData[toggleSelected].details}
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
              Always be Proud and Learning Always be Proud and Learning
            </Marquee>
          </div>
        </div>

        {/* Description */}
        <div className="grow flex items-center justify-center pl-20 md:pl-52 pr-4 h-full">
          <div className="py-12 max-w-4xl">
            <h2 className="text-4xl font-bold font-alt mb-12">
              Representing the frontier of one of the greatest transitions to
              mankind
            </h2>
            <p className="text-2xl md:text-3xl md:pl-20">
              Through (data) research we will reveal the depths of opportunities
              awaiting traditional finance, setting the stage for adventures
              that come with Web3
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
