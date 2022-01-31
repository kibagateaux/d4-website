import { TFunction } from "next-i18next";
import { useState } from "react";
import Lottie from "react-lottie";

import { Container } from "components/elements";
import animationData from "lotties/play.json";

interface HeaderProps {
  t: TFunction;
}

const Header = ({ t }: HeaderProps) => {
  const heroVideo = t("landing-home.hero-video");
  const [showPlayer, setShowPlayer] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section
      id="top"
      className="bg-theme-base-100 text-theme-base-content md:pt-4"
    >
      <Container>
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-center my-20 max-w-6xl w-full mx-auto overflow-hidden relative">
          {/* Background */}
          <div className="absolute w-full h-full top-0 left-0 z-0">
            <video
              key="d4dao-tab-defi.mp4"
              controls={false}
              autoPlay
              playsInline
              muted
              loop
              className="w-full h-full object-cover"
            >
              <source src="/images/d4dao-tab-defi.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Content */}
          <div className="z-20 bg-red-900 bg-opacity-50 relative">
            <div className="absolute w-full h-full top-0 left-0 border-4 z-30 border-white"></div>
            <img className="w-full" src="/images/header-desktop-1.svg" alt="" />
            <div className="relative">
              <img
                className="w-full -mt-1"
                src="/images/header-desktop-2.svg"
                alt=""
              />
              <p className="text-2xl lg:text-3xl xl:text-4xl absolute top-0 w-full mx-auto text-center">
                {t("landing-home.header.title")}
              </p>
              <div
                className="absolute -bottom-4 lg:bottom-0 left-32 lg:left-52 xl:left-64 cursor-pointer flex items-center justify-center"
                onClick={() => {
                  setShowPlayer(true);
                }}
              >
                <Lottie options={defaultOptions} width={90} />
                <p className="font-bold font-alt uppercase">
                  {t("landing-home.header.play")}
                </p>
              </div>
            </div>
            <img
              className="w-full -mt-1"
              src="/images/header-desktop-3.svg"
              alt=""
            />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center justify-center w-full h-screen overflow-hidden relative -mt-16 pt-16">
          {/* Background */}
          <div className="absolute w-full h-full top-0 left-0 z-0">
            <video
              key="d4dao-tab-defi.mp4"
              controls={false}
              autoPlay
              playsInline
              muted
              loop
              className="w-full h-full object-cover"
            >
              <source src="/images/d4dao-tab-defi.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Content */}
          <div className="w-full h-full my-12 max-w-4xl mx-auto relative z-20 bg-red-900 bg-opacity-50 flex flex-col">
            <div className="absolute w-full h-full top-0 left-0 border-4 z-30 border-white"></div>
            <div className="grow bg-white w-full"></div>
            <img
              className="w-full flex-none"
              src="/images/header-mobile-1.svg"
              alt=""
            />
            <div className="relative flex-none">
              <img
                className="w-full -mt-1 -mb-1"
                src="/images/header-mobile-2.svg"
                alt=""
              />
              <p className="text-2xl xs:text-3xl sm:text-4xl truncate absolute top-0 pl-4 pb-4 w-full mx-auto text-center">
                {t("landing-home.header.title")}
              </p>
              <div
                className="absolute bottom-0 sm:bottom-4 left-0 sm:left-8 cursor-pointer flex items-center justify-start"
                onClick={() => {
                  setShowPlayer(true);
                }}
              >
                <Lottie options={defaultOptions} width={80} />
                <p className="font-bold font-alt uppercase">
                  {t("landing-home.header.play")}
                </p>
              </div>
            </div>
            <img
              className="w-full flex-none"
              src="/images/header-mobile-3.svg"
              alt=""
            />
            <div className="grow bg-white w-full"></div>
          </div>
        </div>
      </Container>

      {/* video player */}
      {showPlayer && (
        <div
          className="fixed w-full h-full bg-gray-900 bg-opacity-50 top-0 left-0 z-50 flex items-center justify-center"
          onClick={() => {
            setShowPlayer(false);
          }}
        >
          <iframe
            className="max-w-full"
            width={1024}
            height={576}
            src={heroVideo}
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </section>
  );
};

export default Header;
