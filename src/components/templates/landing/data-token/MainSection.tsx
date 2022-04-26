import { TFunction } from "next-i18next";
import { useRecoilState } from "recoil";
import { useState } from "react";

import { AnimatedLink } from "components/modules";
import { Container } from "components/elements";
import { ElementBounds } from "models";
import { selectedItemHeaderAtom } from "../header-element.state";
import TabButtonsUI from "./partials/TabButtons";
import ListItems from "./partials/ListItems";

interface FaqsItem {
  name: string;
  description?: string;
  content: FaqItemQuestion[] | string;
}
interface FaqItemQuestion {
  title: string | null;
  details: string;
}

interface MainSectionProps {
  t: TFunction;
}

const MainSection = ({ t }: MainSectionProps) => {
  const [tabSelected, setTabSelected] = useState(0);
  const [selectedItem] = useRecoilState<ElementBounds | null>(
    selectedItemHeaderAtom
  );

  const faqs: FaqsItem[] = t("landing-data-token.faqs", {
    returnObjects: true,
  });

  return (
    <section id="top" className="text-theme-base-content">
      {/* Header */}
      <div className="relative z-40 text-theme-base-100">
        <div className="flex justify-end w-full h-96 lg:h-screen lg:-mt-16 lg:pt-16">
          <div className="w-full md:w-9/12 bg-black">
            <video
              controls={false}
              autoPlay
              playsInline
              muted
              loop
              className="w-full h-full object-cover opacity-90"
            >
              <source src="/images/token-cover__.mp4" type="video/mp4" />
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
          <div className="absolute top-0 bottom-0 w-full py-16 px-16 md:px-4 md:pt-20 flex items-center md:items-start">
            <h1 className="text-6xl md:text-8xl xl:text-9xl font-alt font-bold w-full text-center lg:text-left lg:m-32">
              {t("landing-data-token.title")}
            </h1>
          </div>
        </Container>
        <div className="block md:hidden px-8 py-4 absolute bottom-0 right-0 bg-theme-base-content text-theme-base-100 text-lg">
          <AnimatedLink text="discover" href="#" tagColor="bg-theme-primary" />
        </div>
      </div>

      <div className="bg-theme-base-200">
        <Container className="p-8">
          {/* Description */}
          <div className="grow flex items-center justify-center h-full">
            <div className="py-12 max-w-4xl">
              <h2 className="text-3xl font-bold font-alt mb-12">
                {t("landing-data-token.section-desc.title")}
              </h2>
              <div className="space-y-8 text-xl md:text-2xl md:pl-20">
                <p>{t("landing-data-token.section-desc.description-1")}</p>
                <p>{t("landing-data-token.section-desc.description-2")}</p>
              </div>
            </div>
          </div>
        </Container>

        <div className="w-full flex justify-end mt-14 mb-24">
          <div className="border-b border-theme-primary w-4/6"></div>
        </div>

        <Container className="p-8">
          {/* Info table */}
          <div className="max-w-screen-lg mx-auto space-y-4">
            {/* Tab bar */}
            <TabButtonsUI
              items={(faqs || []).map(({ name }, index) => {
                return { name, selected: index === tabSelected };
              })}
              onClick={(index) => setTabSelected(index)}
            />

            {/* Table with info */}
            <div className="bg-theme-base-100 p-4 lg:p-8">
              {faqs && (
                <ListItems
                  description={faqs[tabSelected].description}
                  content={faqs[tabSelected].content}
                />
              )}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default MainSection;
