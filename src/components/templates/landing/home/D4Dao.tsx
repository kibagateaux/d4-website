import { Container } from "components/elements";

const Header = () => (
  <div className="flex space-x-2 lg:space-x-4">
    <div className="bg-theme-primary text-white px-4 lg:px-10 py-1 lg:py-4 text-4xl lg:text-6xl font-bold font-alt flex items-center justify-center">
      <span className="text-theme-primary-content font-monospace mr-1 lg:mr-4">
        D4
      </span>
      DAO
    </div>
    <div className="flex items-center justify-center grow bg-theme-base-content text-theme-base-100 relative overflow-hidden p-0">
      <p className="absolute font-alt font-bold text-4xl lg:text-7xl truncate tracking-widest">
        Following the path of day
      </p>
    </div>
    <div>
      <img
        src="/images/dao-d4-header.png"
        alt=""
        className="h-12 lg:h-full object-cover"
      />
    </div>
  </div>
);

const Message = () => (
  <p className="text-3xl text-theme-base-content-muted px-4 max-w-3xl mx-auto">
    Chainlink is a secret ingredient to unlocking the potencial of smart
    contract platforms and revolutionizing business and society
  </p>
);

const D4Dao = () => {
  return (
    <section
      id="d4-dao"
      className="bg-theme-base-100 text-theme-base-content pt-12"
    >
      {/* Mobile view */}
      <div className="flex flex-col justify-center xl:hidden space-y-6 pt-12 mx-auto">
        <Header />
        <Message />

        <div className="py-8" style={{ backgroundColor: "#1e1e1e" }}>
          <img
            src="/images/dao-d4-bg.png"
            alt=""
            className="w-full max-w-xl mx-auto"
          />
        </div>
      </div>

      {/* Desktop view */}
      <Container className="hidden xl:block">
        <Header />
        <div
          className="bg-no-repeat bg-left py-20"
          style={{ backgroundImage: "url(/images/dao-d4-bg.png)" }}
        >
          <div className="flex flex-col items-end divide-y divide-theme-primary">
            {/* Main content */}
            <div className="px-12 py-20 flex-1 max-w-xl">
              <Message />
            </div>
            <div className="px-12 py-12 w-full flex justify-end">
              <div className="flex items-center space-x-2 max-w-2xl cursor-pointer hover:opacity-80">
                <div className="w-6 h-6 bg-theme-primary"></div>
                <div className="font-alt">learn more</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default D4Dao;
