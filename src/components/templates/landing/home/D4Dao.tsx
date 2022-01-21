import { TFunction } from "next-i18next";
import Marquee from "react-fast-marquee";

import { AnimatedLink } from "components/modules";
import { Container } from "components/elements";

const Header = ({ t }: { t: TFunction }) => (
  <div className="w-full space-x-2 md:space-x-4 flex justify-between">
    <div className="bg-theme-primary text-white px-4 lg:px-10 py-1 lg:py-4 text-4xl lg:text-6xl font-bold font-alt flex items-center justify-center">
      <span className="text-theme-primary-content font-monospace mr-1 lg:mr-4">
        D4
      </span>
      DAO
    </div>
    <div className="flex items-center justify-center grow bg-theme-base-content text-theme-base-100 relative overflow-hidden p-0">
      <Marquee
        gradient={false}
        className="absolute font-alt font-bold text-4xl lg:text-7xl truncate tracking-widest py-2"
      >
        <span className="pr-16">{t("landing-home.d4-dao.header")}</span>
        <span>{t("landing-home.d4-dao.header")}</span>
      </Marquee>
    </div>
    <div className="flex-none w-32 md:w-52">
      <img
        src="/images/dao-d4-header.png"
        alt=""
        className="w-full object-cover"
      />
    </div>
  </div>
);

const Message = ({ t }: { t: TFunction }) => (
  <p className="text-3xl text-theme-base-content-muted px-4 max-w-3xl mx-auto">
    {t("landing-home.d4-dao.details")}
  </p>
);

interface D4DaoProps {
  t: TFunction;
}

const D4Dao = ({ t }: D4DaoProps) => {
  return (
    <section
      id="d4-dao"
      className="bg-theme-base-100 text-theme-base-content pt-12"
    >
      {/* Mobile view */}
      <div className="flex flex-col justify-center xl:hidden space-y-6 py-12 mx-auto">
        <Header t={t} />
        <Message t={t} />

        <div className="py-8" style={{ backgroundColor: "#1e1e1e" }}>
          <video
            controls={false}
            autoPlay
            muted
            loop
            className="w-full max-w-xl mx-auto"
          >
            <source src="/images/d4-dao-home.webm" type="video/webm" />
          </video>
        </div>

        <div className="w-full flex justify-end py-8 pr-8">
          <AnimatedLink text={t("landing-home.learn-more")} href="/d4-dao" />
        </div>
      </div>

      {/* Desktop view */}
      <Container className="hidden xl:block">
        <Header t={t} />
        <div className="py-20">
          <div className="flex flex-col items-start relative">
            <video controls={false} autoPlay muted loop className="max-w-2xl">
              <source src="/images/d4-dao-home.webm" type="video/webm" />
            </video>

            {/* Main content */}
            <div className="absolute max-w-2xl top-0 right-0">
              <div className="px-20 pt-40 flex-1">
                <Message t={t} />
              </div>
              <div className="px-12 py-20 w-full flex justify-end">
                <AnimatedLink
                  text={t("landing-home.learn-more")}
                  href="/d4-dao"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default D4Dao;
