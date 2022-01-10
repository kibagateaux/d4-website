import { Container } from "components/elements";

const Header = () => (
  <div className="flex space-x-2 lg:space-x-4">
    <div
      className="flex items-center justify-center grow text-theme-base-100 relative overflow-hidden p-0"
      style={{ backgroundColor: "#303030" }}
    >
      <p className="absolute font-alt font-bold text-4xl lg:text-6xl truncate tracking-widest">
        What is D4DATA
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
        Centric chain Agnostic
      </p>
    </div>
  </div>
);

const Message = () => (
  <p className="text-3xl mx-auto">
    We are crypto kids, asset investors with in-depth DeFi knowledge. Our value
    proposition? To help you identity the opportunities that Web3 has to offer.
  </p>
);

const LearnMore = () => (
  <div className="flex items-center justify-end space-x-2 px-8 cursor-pointer hover:opacity-80">
    <div className="w-6 h-6 bg-theme-primary"></div>
    <div className="font-alt tracking-widest">learn more</div>
  </div>
);

const WhatIsD4Data = () => {
  return (
    <section
      id="what-is-d4data"
      className="bg-theme-base-content text-theme-base-100 pt-12"
    >
      {/* Mobile view */}
      <div className="flex flex-col justify-center xl:hidden space-y-6 px-4 py-12 mx-auto">
        <Header />
        <div className="py-8 px-12" style={{ backgroundColor: "#000" }}>
          <img
            src="/images/what-is-d4-data.png"
            alt=""
            className="w-full max-w-xl mx-auto"
          />
          <div className="flex items-center justify-end space-x-4 -mt-40 -mr-8 mb-24">
            <p className="text-3xl">The Power of</p>
            <div className="bg-theme-primary text-white px-8 py-2 text-3xl font-alt font-bold">
              People
            </div>
          </div>
        </div>

        <Message />
        <LearnMore />
      </div>

      {/* Desktop view */}
      <Container className="hidden xl:block">
        <Header />
        <div
          className="bg-no-repeat bg-right py-20 px-20 bg-origin-content"
          style={{ backgroundImage: "url(/images/what-is-d4-data.png)" }}
        >
          <div className="flex flex-col items-start divide-y divide-theme-primary">
            <div className="py-20 px-4 flex-1 max-w-xl 2xl:max-w-4xl space-y-12">
              <Message />
              <LearnMore />
            </div>
            {/* Main content */}
            <div className="w-full py-12">
              <div className="flex items-center justify-end space-x-8 -mr-8">
                <p className="text-6xl">The Power of</p>
                <div className="bg-theme-primary text-white px-12 py-5 text-5xl font-alt font-bold">
                  People
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
