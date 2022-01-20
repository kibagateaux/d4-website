import { AnimatedLink } from "components/modules";
import { useRecoilState } from "recoil";
import { useState } from "react";
import Marquee from "react-fast-marquee";

import { ElementBounds } from "models";
import { selectedItemHeaderAtom } from "../header-element.state";
import ToggleBoxes from "../ToggleBoxes";

const ToggleData = [
  {
    name: "Simple",
    details: "Single token exposure with automated rebalancing and additions",
  },
  {
    name: "DeFi",
    details:
      "The data economy is envolving expeditiously, bringing investment opportunities in network infraestructure, memory, storage and cybersecurity.",
  },
  {
    name: "Other Data",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
    <section className="text-theme-base-content">
      {/* Header */}
      <div className="relative z-40">
        <div className="flex justify-end w-full">
          <div className="w-full h-96 md:h-auto md:w-9/12 relative">
            <img
              src="/images/dao-d4-bg.png"
              alt=""
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
        {selectedItem && (
          <div
            className="absolute h-screen bg-theme-base-content opacity-90 -top-20 hidden lg:flex items-end justify-center transition duration-100 ease-in"
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
          <h1 className="text-6xl md:text-7xl xl:text-9xl font-alt font-bold w-full text-center text-theme-base-100 md:text-theme-primary">
            D4 DAO
          </h1>
        </div>
        <div className="block md:hidden px-8 py-4 absolute bottom-0 right-0 bg-theme-base-content text-theme-base-100 text-lg">
          <AnimatedLink text="discover" href="#" tagColor="bg-theme-primary" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-end justify-between md:h-screen md:-mt-96 relative mx-12">
        <div className="flex-none w-20 h-full hidden md:flex items-center justify-center">
          <div className="-rotate-90 opacity-80">
            <Marquee
              className="w-full font-bold font-alt text-6xl text-theme-primary overflow-hidden"
              speed={2}
              gradientColor={[255, 255, 255]}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </Marquee>
          </div>
        </div>
        <p className="flex-none px-4 md:px-20 py-20 md:py-40 text-2xl md:text-3xl max-w-4xl border-b border-theme-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eos est
          iusto expedita aliquid sint facere dolores ratione error voluptates.
          Consequuntur mollitia iusto deserunt doloribus et obcaecati inventore
          repudiandae! Mollitia!
        </p>
      </div>

      {/* Section 2 - Toggles */}
      <div className="flex flex-col md:flex-row items-center justify-between space-x-8 mx-12">
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
        <div className="grow max-w-sm md:max-w-xl">
          <img
            src="/images/what-is-d4-data-image-2.png"
            alt=""
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Section 3 - Glitch Images */}
      <div className="flex p-12" style={{ height: "800px" }}>
        <div className="flex-none w-20 h-full hidden md:flex items-center justify-center overflow-hidden">
          <div className="-rotate-90 opacity-80">
            <Marquee
              className="w-full font-bold font-alt text-6xl text-theme-primary overflow-hidden"
              speed={2}
              gradientColor={[255, 255, 255]}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </Marquee>
          </div>
        </div>

        <div className="grow flex items-center justify-center mb-32 p-4">
          <div className="max-w-6xl py-12 px-12 md:px-40 md:ml-20">
            <h2 className="text-4xl font-bold font-alt mb-12">
              Representing the frontier of one of the greatest transitions to
              mankind
            </h2>
            <p className="text-xl md:text-3xl md:pl-40">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
              asperiores aspernatur commodi maxime repudiandae. Suscipit rem qui
              est non, aliquam vero delectus labore, voluptatibus doloremque,
              incidunt explicabo aut numquam fugiat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
