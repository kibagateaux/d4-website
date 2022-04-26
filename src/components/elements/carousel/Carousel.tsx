import { Carousel as PrimeReactCarousel } from "primereact/carousel";

interface CarouselProps {
  autoplayInterval?: number;
  bgIndicator?: string;
  bgIndicatorSelected?: string;
  circular?: boolean;
  controls?: boolean;
  itemTemplate: any;
  numScroll?: number;
  numVisible?: number;
  orientation?: "horizontal" | "vertical";
  value: any[];
}

export const Carousel = ({
  autoplayInterval = 2000,
  bgIndicator = "rgba(0, 0, 0, 0.3)",
  bgIndicatorSelected = "rgba(0, 0, 0, 1)",
  circular = true,
  controls = false,
  itemTemplate,
  numScroll = 1,
  numVisible = 1,
  orientation = "horizontal",
  value,
}: CarouselProps) => (
  <>
    <PrimeReactCarousel
      value={value}
      itemTemplate={itemTemplate}
      numVisible={numVisible}
      numScroll={numScroll}
      autoplayInterval={autoplayInterval}
      circular={circular}
      orientation={orientation}
    ></PrimeReactCarousel>
    <style jsx global>{`
      .p-carousel {
        font-family: "GT-Sectra";
      }

      .p-carousel-container .p-link {
        display: ${controls ? "grid" : "none"};
      }

      .p-carousel .p-carousel-indicators .p-carousel-indicator button {
        width: 1.2rem;
        background: ${bgIndicator};
        margin-right: 8px;
      }

      .p-carousel
        .p-carousel-indicators
        .p-carousel-indicator.p-highlight
        button {
        width: 2rem;
        background: ${bgIndicatorSelected};
      }
    `}</style>
  </>
);
