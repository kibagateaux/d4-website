interface CarouselItemTemplateProps {
  name: string;
  details: string;
}

const CarouselItemTemplate = ({ name, details }: CarouselItemTemplateProps) => (
  <div className="w-full p-4">
    <div className="grow relative">
      <img
        src="/images/token-data-bg.png"
        alt=""
        className="w-full object-cover"
      />
      <div className="absolute bottom-0 left-0 -ml-4 mb-4 px-4 py-2 w-40 flex items-center justify-end bg-theme-base-content text-theme-base-100 text-2xl">
        <p>{name}</p>
      </div>
    </div>

    <p className="text-3xl mt-8">{details}</p>
  </div>
);

export default CarouselItemTemplate;
