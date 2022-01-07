import { Container } from "components/elements";
import { News } from "models";

const NewsItem = ({
  children,
  align,
}: {
  children: React.ReactNode;
  align: "right" | "left";
}) => (
  <div
    className={`flex flex-col md:flex-row items-start space-y-2 md:space-x-8 md:space-y-0 md:items-center ${
      align === "right" ? "justify-end" : "justify-start"
    }`}
  >
    {children}
  </div>
);

const Thumbnail = ({ src }: { src: string }) => (
  <img src={src} alt="" className="object-cover h-20 w-72 grayscale" />
);

const NewsTitle = ({ title }: { title: string }) => (
  <p className="text-4xl">{title}</p>
);

const Button = ({ time }: { time: number }) => (
  <div className="bg-theme-base-content text-theme-base-100 px-6 py-6 font-alt font-bold hover:opacity-80 cursor-pointer">
    {time} min read
  </div>
);

const News = () => {
  return (
    <section id="news" className="bg-theme-base-100 text-theme-base-content py-20 px-4">
      <Container>
        <p className="text-9xl font-alt font-bold">News</p>

        <div className="space-y-16 md:space-y-8 pt-8">
          <NewsItem align="left">
            <Thumbnail src="/images/news-example-1.jpeg" />
            <NewsTitle title="Index Cooperative Launches $DATA in collaboration with Ren" />
            <Button time={2} />
          </NewsItem>

          <NewsItem align="right">
            <Button time={6} />
            <Thumbnail src="/images/news-example-2.jpeg" />
            <NewsTitle title="The Metaverse is built on the Data Economy" />
          </NewsItem>

          <NewsItem align="right">
            <Button time={6} />
            <NewsTitle title="Can Brave's Basic Attention Token Dismantle Google's Empire?" />
            <Thumbnail src="/images/news-example-3.jpeg" />
          </NewsItem>
        </div>
      </Container>
    </section>
  );
};

export default News;
