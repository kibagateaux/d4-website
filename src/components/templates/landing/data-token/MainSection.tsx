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
    name: "Simple",
    details: "Single token exposure with automated rebalancing and additions",
  },
  {
    name: "Data",
    details: "Single token exposure with automated rebalancing and additions",
  },
  {
    name: "Example",
    details: "Single token exposure with automated rebalancing and additions",
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

      {/* Toggles Section - Mobile version */}
      <div className="block max-w-sm mx-auto md:hidden">
        <Carousel
          value={ToggleData}
          itemTemplate={CarouselItemTemplate}
          autoplayInterval={5000}
        ></Carousel>
      </div>

      {/* Toggles Section - Desktop version */}
      <div className="hidden md:flex flex-row items-center justify-between space-x-8">
        <div className="grow py-12 space-x-12 flex items-end">
          <ToggleBoxes
            bgColor="bg-theme-base-content"
            textColor="text-theme-base-100"
            selected={toggleSelected}
            text={ToggleData.map((t) => t.name)}
            onClick={handleToggleClick}
          />
          <p className="text-xl max-w-md leading-tight">
            {ToggleData[toggleSelected].details}
          </p>
        </div>
        <div className="grow max-w-xl">
          <img
            src="/images/token-data-bg.png"
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
              className="font-bold font-alt text-3xl md:text-6xl text-theme-base-content overflow-hidden"
              speed={2}
              gradient={true}
              gradientWidth={50}
              gradientColor={[241, 18, 56]}
            >
              Always be Proud and Learning Always be Proud and Learning
            </Marquee>
          </div>
        </div>

        {/* Description */}
        <div className="grow flex items-center justify-center pl-20 md:pl-52 pr-4 h-full">
          <div className="py-12 max-w-4xl">
            <h2 className="text-4xl font-bold font-alt mb-12">
              Data-based Protocol
            </h2>
            <p className="text-2xl md:text-3xl md:pl-20">
              An independent security audit should have been performed on the
              protocol and results reviewed by the product methodologist. In the
              case that no audit has been performed, the methodologist applies
              subjective judgement of the protocol based on assessment of the
              criteria above and communications with the team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
