import { useState } from "react";

import { Container } from "components/elements";

const YT_VIDEO = "https://www.youtube.com/embed/ILofy-escS0";
const VIDEO =
  "https://d2gvzqttsr1gma.cloudfront.net/images/intro/reental_intro_es.mp4";
const POSTER = "https://d2gvzqttsr1gma.cloudfront.net/images/intro/poster.png";
const isYoutubeVideo = true;

const Header = () => {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <section className="bg-theme-base-100 text-theme-base-content pt-20 md:pt-4">
      <Container>
        <div
          className="cursor-pointer"
          onClick={() => {
            setShowPlayer(true);
          }}
        >
          <img
            src="/images/header-desktop.png"
            alt=""
            className="hidden md:block w-full max-w-6xl mx-auto py-20"
          />
          <img
            src="/images/header-mobile.png"
            alt=""
            className="block md:hidden w-full max-w-md mx-auto py-20"
          />
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
