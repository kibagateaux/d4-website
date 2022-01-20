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
    <section className="text-theme-base-content">
      {/* Header */}
      <div className="relative z-40 text-theme-base-100">
        <div className="flex justify-end w-full">
          <div className="w-full h-96 md:h-auto md:w-10/12 relative">
            <img
              src="/images/dao-d4-bg.png"
              alt=""
              className="w-full h-full object-cover opacity-30 md:opacity-50"
            />
          </div>
        </div>
        {selectedItem && (
          <div
            className="absolute h-full top-0 bg-theme-base-content opacity-90 hidden lg:flex items-end justify-center transition duration-100 ease-in"
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
            $DATA Token
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
              Simple Unique Efficient Diverse Simple Unique Efficient Diverse
            </Marquee>
          </div>
        </div>

        {/* Description */}
        <div className="flex-grow flex flex-col items-end justify-end pl-20 md:pl-60 h-full text-2xl md:text-3xl">
          <div className="max-w-2xl border-b border-theme-primary px-4 md:px-0 py-32 md:py-40 space-y-4">
            <p>
              Cultivate a more open, secure, and equitable internet where
              everyone, including robots, are equals when facing opportunities
              in Web3
            </p>
          </div>
        </div>
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
