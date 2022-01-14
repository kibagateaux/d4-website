import { AnimatedLink } from "components/modules";
import { useRecoilState } from "recoil";
import { useState } from "react";

import { ElementBounds } from "models";
import { selectedItemHeaderAtom } from "../header-element.state";
import ToggleBoxes from "../ToggleBoxes";
import Marquee from "react-fast-marquee";

const ToggleData = [
  {
    name: "Data example",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eos est iusto expedita aliquid sint facere dolores ratione error voluptates. Consequuntur mollitia iusto deserunt doloribus et obcaecati inventore repudiandae! Mollitia!",
  },
  {
    name: "Data",
    details:
      "The data economy is envolving expeditiously, bringing investment opportunities in network infraestructure, memory, storage and cybersecurity.",
  },
  {
    name: "Data 2",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eos est iusto expedita aliquid sint facere dolores ratione error voluptates. Consequuntur mollitia iusto deserunt doloribus et obcaecati inventore repudiandae! Mollitia!",
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
    <section id="top">
      {/* Header */}
      <div className="relative z-40">
        <div className="flex justify-end w-full">
          <div className="w-full md:w-9/12 relative">
            <img
              src="/images/dao-d4-bg.png"
              alt=""
              className="w-full h-full object-cover opacity-50"
            />
          </div>
        </div>
        {selectedItem && (
          <div
            className="absolute h-screen bg-theme-primary opacity-90 -top-20 hidden lg:flex items-end justify-center transition duration-100 ease-in"
            style={{
              left: `${selectedItem?.left}px`, // $('.selected-option-header').offsetLeft
              width: `${selectedItem?.width}px`, // $('.selected-option-header').offsetWidth
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
        <div className="absolute inset-0 p-16 md:pt-20 flex flex-col justify-between items-center">
          <h1 className="text-5xl md:text-7xl xl:text-9xl font-alt font-bold w-full text-center">
            What is D4DATA
          </h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-end justify-between md:h-screen md:-mt-96 relative mx-12">
        <div className="flex-none w-20 h-full hidden md:flex items-center justify-center">
          <div className="-rotate-90 opacity-80">
            <Marquee
              className="w-full font-bold font-alt text-6xl text-theme-primary overflow-hidden"
              speed={2}
              gradientColor={[0, 0, 0]}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </Marquee>
          </div>
        </div>
        <p className="flex-none py-12 text-2xl md:text-3xl max-w-xl border-b border-theme-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eos est
          iusto expedita aliquid sint facere dolores ratione error voluptates.
          Consequuntur mollitia iusto deserunt doloribus et obcaecati inventore
          repudiandae! Mollitia!
        </p>
      </div>

      {/* Section 2 - Toggles */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between space-x-8 mx-12">
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
            <ToggleBoxes
              bgColor="bg-theme-primary"
              textColor="text-theme-base-100"
              selected={toggleSelected}
              text={ToggleData.map((t) => t.name)}
              onClick={handleToggleClick}
            />
          </div>
          <p className="text-lg max-w-md leading-tight">
            {ToggleData[toggleSelected].details}
          </p>
        </div>
        <div className="grow max-w-sm md:max-w-xl">
          <img
            src="/images/what-is-d4-data-image-2.png"
            alt=""
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Section 3 - Glitch Images */}
      <div className="flex p-12 lg:h-screen">
        <div className="flex-none w-20 h-full hidden md:flex items-center justify-center lg:-mt-96">
          <div className="-rotate-90 opacity-80">
            <Marquee
              className="w-full font-bold font-alt text-6xl text-theme-primary overflow-hidden"
              speed={2}
              gradientColor={[0, 0, 0]}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </Marquee>
          </div>
        </div>

        <div className="grow flex items-start justify-center mb-32 md:mb-96 p-4">
          <div className="flex flex-col items-end">
            <img
              src="/images/wid-people-1.png"
              alt=""
              className="object-cover h-full w-full"
            />
            <p className="text-xl md:text-3xl md:-mt-10 md:-mr-24">
              Thomas Hepner
            </p>
          </div>
        </div>
        <div className="grow flex items-end justify-center p-4">
          <div className="flex flex-col items-end">
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
