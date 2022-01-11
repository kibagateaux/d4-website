import Link from "next/link";

import { Container } from "components/elements";
import { News } from "models";
import { AnimatedLink, postsBrowserSelector } from "components/modules";
import { shuffleArray } from "utils";
import { useAsyncRecoilValue } from "components/modules/ghost/hooks";

const NewsItem = ({
  children,
  align,
}: {
  children: React.ReactNode;
  align: "right" | "left";
}) => (
  <div
    className={`flex flex-col md:flex-row items-start md:items-center w-full hover:opacity-80 ${
      align === "right" ? "justify-end" : "justify-start"
    }`}
  >
    {children}
  </div>
);

const Thumbnail = ({ src, order }: { src: string; order: number }) => (
  <img
    src={src}
    alt=""
    className={`object-cover h-20 w-72 grayscale m-4 border order-${order}`}
  />
);

const NewsTitle = ({ title, order }: { title: string; order: number }) => (
  <p className={`text-4xl m-4 order-${order}`}>{title}</p>
);

const Button = ({ time, order }: { time: number; order: number }) => (
  <a
    className={`bg-theme-base-content text-theme-base-100 m-4 px-6 py-6 font-alt font-bold text-center order-${order}`}
  >
    {time} min read
  </a>
);

const News = () => {
  const filter = {
    limit: 3,
    order: "published_at DESC",
  };

  const {
    loading,
    error,
    value: posts,
  } = useAsyncRecoilValue(postsBrowserSelector, [filter]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Se ha producido un error cargando las noticias</p>;
  }

  return (
    <section
      id="news"
      className="bg-theme-base-100 text-theme-base-content py-20 px-4"
    >
      <Container>
        <p className="text-9xl font-alt font-bold">News</p>

        <div className="space-y-16 md:space-y-8 pt-8">
          {Array.isArray(posts) &&
            posts.map(
              (
                { feature_image, reading_time, title, slug }: any,
                index: number
              ) => {
                const orderElements = shuffleArray([1, 2, 3]);
                const align = shuffleArray(["left", "right"]);

                return (
                  <Link href={`/news/${slug}`}>
                    <a>
                      <NewsItem align={align[0]} key={index}>
                        <Thumbnail
                          src={feature_image}
                          order={orderElements[0]}
                        />
                        <NewsTitle title={title} order={orderElements[1]} />
                        <Button time={reading_time} order={orderElements[2]} />
                      </NewsItem>
                    </a>
                  </Link>
                );
              }
            )}
        </div>

        <div className="flex justify-end py-12">
          <AnimatedLink text="learn more" href="/news" />
        </div>
      </Container>
    </section>
  );
};

export default News;
