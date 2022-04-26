interface CarouselItemTemplateProps {
  name: string;
  details: string;
  source: string;
}

const CarouselItemTemplate = ({
  name,
  details,
  source,
}: CarouselItemTemplateProps) => (
  <div className="w-full p-4">
    <div className="grow relative">
      {source.indexOf("mp4") >= 0 ? (
        <video
          key={source}
          controls={false}
          autoPlay
          playsInline
          muted
          loop
          className="w-full object-cover"
        >
          <source src={source} type="video/mp4" />
        </video>
      ) : (
        <img src={source} alt="" className="w-full object-cover" />
      )}
      <div className="absolute bottom-0 left-0 -ml-4 mb-4 px-4 py-2 w-40 flex items-center justify-end bg-theme-base-content text-theme-base-100 text-2xl">
        <p>{name}</p>
      </div>
    </div>

    <p className="text-3xl mt-8">{details}</p>
  </div>
);

export default CarouselItemTemplate;
