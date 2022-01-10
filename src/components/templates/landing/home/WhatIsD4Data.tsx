import { TFunction } from "next-i18next";

import { Container } from "components/elements";

const Header = ({ t }: { t: TFunction }) => (
  <div className="flex space-x-2 lg:space-x-4">
    <div
      className="flex items-center justify-center grow text-theme-base-100 relative overflow-hidden p-0"
      style={{ backgroundColor: "#303030" }}
    >
      <p className="absolute font-alt font-bold text-4xl lg:text-6xl truncate tracking-widest">
        {t("landing-home.what-is.header-1")}
      </p>
    </div>
    <div>
      <img
        src="/images/what-is-d4-data-header.png"
        alt=""
        className="h-12 lg:h-full object-cover"
      />
    </div>
    <div
      className="flex items-center justify-center grow text-theme-base-100 relative overflow-hidden p-0"
      style={{ backgroundColor: "#303030" }}
    >
      <p className="absolute font-alt font-bold text-4xl lg:text-6xl truncate tracking-widest">
        {t("landing-home.what-is.header-2")}
      </p>
    </div>
  </div>
);

const Message = ({ t }: { t: TFunction }) => (
  <p className="text-3xl mx-auto">{t("landing-home.what-is.details")}</p>
);

const LearnMore = ({ t }: { t: TFunction }) => (
  <div className="flex items-center justify-end space-x-2 px-8 cursor-pointer hover:opacity-80">
    <div className="w-6 h-6 bg-theme-primary"></div>
    <div className="font-alt tracking-widest">
      {t("landing-home.learn-more")}
    </div>
  </div>
);

interface WhatIsD4DataProps {
  t: TFunction;
}

const WhatIsD4Data = ({ t }: WhatIsD4DataProps) => {
  return (
    <section
      id="what-is-d4data"
      className="bg-theme-base-content text-theme-base-100 pt-12"
    >
      {/* Mobile view */}
      <div className="flex flex-col justify-center xl:hidden space-y-6 px-4 py-12 mx-auto">
        <Header t={t} />
        <div className="py-8 px-12" style={{ backgroundColor: "#000" }}>
          <img
            src="/images/what-is-d4-data.png"
            alt=""
            className="w-full max-w-xl mx-auto"
          />
          <div className="flex items-center justify-end space-x-4 -mt-40 -mr-8 mb-24">
            <p className="text-3xl">{t("landing-home.what-is.slogan-1")}</p>
            <div className="bg-theme-primary text-white px-8 py-2 text-3xl font-alt font-bold">
              {t("landing-home.what-is.slogan-2")}
            </div>
          </div>
        </div>

        <Message t={t} />
        <LearnMore t={t} />
      </div>

      {/* Desktop view */}
      <Container className="hidden xl:block">
        <Header t={t} />
        <div
          className="bg-no-repeat bg-right py-20 px-20 bg-origin-content"
          style={{ backgroundImage: "url(/images/what-is-d4-data.png)" }}
        >
          <div className="flex flex-col items-start divide-y divide-theme-primary">
            <div className="py-20 px-4 flex-1 max-w-xl 2xl:max-w-4xl space-y-12">
              <Message t={t} />
              <LearnMore t={t} />
            </div>
            {/* Main content */}
            <div className="w-full py-12">
              <div className="flex items-center justify-end space-x-8 -mr-8">
                <p className="text-6xl">{t("landing-home.what-is.slogan-1")}</p>
                <div className="bg-theme-primary text-white px-12 py-5 text-5xl font-alt font-bold">
                  {t("landing-home.what-is.slogan-2")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhatIsD4Data;
