import { Container } from "components/elements";

const SimpleTag = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col w-40 ${className}`}>
    <div className="text-right bg-theme-base-content text-theme-base-100 text-3xl px-2 py-1">
      Simple
    </div>
    <div className="flex">
      <div className="flex-1 bg-theme-base-100 h-0.5"></div>
      <div className="flex-1 bg-theme-base-content-muted h-0.5"></div>
    </div>
  </div>
);

const Header = () => (
  <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-x-8 mb-12 z-10">
    <img src="/images/token-data-logo.png" alt="" className="w-20 lg:w-24" />
    <p className="text-white text-3xl lg:text-6xl">Token</p>
  </div>
);

const Message = () => (
  <p className="text-3xl">
    Single token exposure with automated rebalancing and additions
  </p>
);

const DataToken = () => {
  return (
    <section
      id="data-token"
      className="bg-theme-primary text-theme-primary-content py-20 px-4"
    >
      <Container>
        {/* Mobile view */}
        <div className="flex flex-col justify-center xl:hidden  max-w-xl mx-auto">
          <Header />
          <div className="relative -mt-24 lg:mt-0 z-0 mb-8">
            <img src="/images/token-data-bg.png" alt="" className="w-full max-w-sm mx-auto" />
            <SimpleTag className="absolute bottom-0 left-0 mb-10 -ml-4" />
          </div>
          <Message />
        </div>

        {/* Desktop view */}
        <div
          className="bg-no-repeat bg-right hidden xl:block"
          style={{ backgroundImage: "url(/images/token-data-bg.png)" }}
        >
          <div className="flex flex-col divide-y divide-theme-primary-content">
            <div className="px-12 pb-20">
              <Header />

              {/* Main content */}
              <div className="flex items-end space-x-8">
                <div className="flex flex-col space-y-6">
                  <SimpleTag />
                  <div className="w-36 h-6 bg-theme-base-content"></div>
                  <div className="w-28 h-6 bg-theme-base-content"></div>
                  <div className="w-32 h-6 bg-theme-base-content"></div>
                  <div className="w-16 h-6 bg-theme-base-content"></div>
                </div>
                <div className="px-12 flex-1 max-w-xl 2xl:max-w-3xl">
                  <Message />
                </div>
              </div>
            </div>
            <div className="px-12 py-20">
              <div className="flex items-center justify-end space-x-2 max-w-2xl 2xl:max-w-3xl cursor-pointer hover:opacity-80">
                <div className="w-6 h-6 bg-white"></div>
                <div className="font-alt">learn more</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DataToken;
