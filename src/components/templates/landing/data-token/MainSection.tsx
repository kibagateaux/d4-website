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
    name: "Data",
    details:
      "The data economy is envolving expeditiously, bringing investment opportunities in network infraestructure, memory, storage and cybersecurity.",
  },
  {
    name: "Other Data",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Example",
    details:
      "Ipsam eos est iusto expedita aliquid sint facere dolores ratione error voluptates.",
  },
  {
    name: "Another Example",
    details:
      " Consequuntur mollitia iusto deserunt doloribus et obcaecati inventore repudiandae! Mollitia!",
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
      <div className="relative z-40 text-theme-base-100">
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
            className="absolute h-screen bg-theme-base-content opacity-90 -top-20 hidden lg:flex items-end justify-center transition duration-100 ease-in"
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
        <div className="absolute inset-0 p-16 md:pt-20 flex flex-col justify-between items-center">
          <h1 className="text-5xl md:text-7xl xl:text-9xl font-alt font-bold w-full text-center">
            $DATA Token
          </h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-end justify-between md:h-screen md:-mt-96 relative mx-12">
        <div className="flex-none w-20 h-full hidden md:flex items-center justify-center">
          <div className="-rotate-90 opacity-80">
            <Marquee
              className="w-full font-bold font-alt text-6xl text-theme-base-content overflow-hidden"
              speed={2}
              gradientColor={[241, 18, 56]}
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
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between space-x-8 mx-12">
        <div className="grow py-12 space-y-12 md:space-x-12 flex flex-col md:flex-row items-center md:items-end">
          <ToggleBoxes
            bgColor="bg-theme-base-content"
            textColor="text-theme-base-100"
            selected={toggleSelected}
            text={ToggleData.map((t) => t.name)}
            onClick={handleToggleClick}
          />
          <p className="text-lg max-w-md leading-tight">
            {ToggleData[toggleSelected].details}
          </p>
        </div>
        <div className="grow max-w-sm md:max-w-xl">
          <img
            src="/images/token-data-bg.png"
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
              className="w-full font-bold font-alt text-6xl text-theme-base-content overflow-hidden"
              speed={2}
              gradientColor={[241, 18, 56]}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </Marquee>
          </div>
        </div>

        <div className="grow flex items-center justify-center mb-32 md:mb-96 p-4">
          <div className="max-w-2xl p-12">
            <p className="text-xl md:text-3xl">
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
