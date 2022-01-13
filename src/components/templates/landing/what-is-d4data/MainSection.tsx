import { AnimatedLink } from "components/modules";

const MainSection = () => {
  return (
    <section>
      {/* Header */}
      <div className="relative">
        <div className="flex justify-end w-full">
          <div className="w-full md:w-9/12 relative">
            <img
              src="/images/dao-d4-bg.png"
              alt=""
              className="w-full h-full object-cover opacity-50"
            />
          </div>
        </div>
        <div className="absolute inset-0 p-16 md:pt-20 flex flex-col justify-between items-center">
          <h1 className="text-5xl md:text-7xl xl:text-9xl font-alt font-bold w-full text-center">
            What is D4DATA
          </h1>
          <div className="px-12 py-12 z-40">
            <AnimatedLink
              text="discover"
              href="#"
              tagColor="bg-theme-base-100"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-end justify-between h-screen md:-mt-96 relative mx-12">
        <div className="flex-none w-20 h-full bg-red-500 bg-opacity-10 hidden md:flex items-center justify-center">
          <p className="-rotate-90 font-bold font-alt text-6xl text-theme-primary">
            Marquee
          </p>
        </div>
        <p className="flex-none py-12 text-3xl max-w-xl border-b border-theme-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eos est
          iusto expedita aliquid sint facere dolores ratione error voluptates.
          Consequuntur mollitia iusto deserunt doloribus et obcaecati inventore
          repudiandae! Mollitia!
        </p>
      </div>

      <p>Toggle + imagen</p>
      <p>Marquee + imágenes</p>
    </section>
  );
};

export default MainSection;
