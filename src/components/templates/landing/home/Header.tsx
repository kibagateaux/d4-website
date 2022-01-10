import { useState } from "react";
import Lottie from "react-lottie";

import { Container } from "components/elements";
import animationData from "lotties/play.json";

const YT_VIDEO = "https://www.youtube.com/embed/ILofy-escS0";
const VIDEO =
  "https://d2gvzqttsr1gma.cloudfront.net/images/intro/reental_intro_es.mp4";
const POSTER = "https://d2gvzqttsr1gma.cloudfront.net/images/intro/poster.png";
const isYoutubeVideo = true;

const Header = () => {
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
    <section className="bg-theme-base-100 text-theme-base-content pt-20 md:pt-4">
      <Container>
        {/* Desktop */}
        <div
          className="hidden md:block w-full bg-no-repeat bg-cover bg-center overflow-hidden my-20 max-w-6xl mx-auto"
          style={{ backgroundImage: "url(/images/token-data-bg.png)" }}
        >
          <img className="w-full" src="/images/header-desktop-1.svg" alt="" />
          <div className="relative">
            <img className="w-full" src="/images/header-desktop-2.svg" alt="" />
            <p className="text-2xl lg:text-3xl xl:text-4xl absolute top-0 w-full mx-auto text-center">
              We show the Path of the Data
            </p>
            <div
              className="absolute -bottom-4 lg:bottom-0 left-32 lg:left-52 xl:left-64 cursor-pointer flex items-center justify-center"
              onClick={() => {
                setShowPlayer(true);
              }}
            >
              <Lottie options={defaultOptions} width={90} />
              <p className="font-bold font-alt uppercase">Play</p>
            </div>
          </div>
          <img className="w-full" src="/images/header-desktop-3.svg" alt="" />
        </div>

        {/* Mobile */}
        <div
          className="block md:hidden w-full bg-no-repeat bg-cover bg-center overflow-hidden my-12 max-w-4xl mx-auto"
          style={{ backgroundImage: "url(/images/token-data-bg.png)" }}
        >
          <img className="w-full" src="/images/header-mobile-1.svg" alt="" />
          <div className="relative">
            <img className="w-full" src="/images/header-mobile-2.svg" alt="" />
            <p className="text-2xl xs:text-3xl sm:text-4xl truncate absolute top-0 pl-4 pb-4 w-full mx-auto text-center">
              We show the Path of the Data
            </p>
            <div
              className="absolute bottom-0 sm:bottom-4 left-0 sm:left-8 cursor-pointer flex items-center justify-start"
              onClick={() => {
                setShowPlayer(true);
              }}
            >
              <Lottie options={defaultOptions} width={80} />
              <p className="font-bold font-alt uppercase">Play</p>
            </div>
          </div>
          <img className="w-full" src="/images/header-mobile-3.svg" alt="" />
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
          {isYoutubeVideo ? (
            <iframe
              className="max-w-full"
              width={1024}
              height={576}
              src={YT_VIDEO}
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="max-w-screen-xl">
              <video controls autoPlay poster={POSTER}>
                <source src={VIDEO} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Header;
