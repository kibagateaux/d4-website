interface CarouselItemTemplateProps {
  name: string;
  details: string;
}

const CarouselItemTemplate = ({ name, details }: CarouselItemTemplateProps) => (
  <div className="w-full p-4">
    <div className="flex flex-col space-y-4">
      <p className="text-5xl">The Power of</p>
      <div className="px-4 py-2 w-60 flex items-center justify-center bg-theme-primary text-theme-base-100 text-3xl font-bold font-alt place-self-end">
        <p>{name}</p>
      </div>
    </div>

    <p className="text-2xl mt-8 text-theme-base-100">{details}</p>
  </div>
);

export default CarouselItemTemplate;
