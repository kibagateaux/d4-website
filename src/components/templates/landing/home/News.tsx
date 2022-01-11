import Link from "next/link";

import { Container } from "components/elements";
import { News } from "models";
import { AnimatedLink, postsBrowserSelector } from "components/modules";
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

const Thumbnail = ({ src }: { src: string }) => (
  <img
    src={src}
    alt=""
    className="object-cover h-20 w-72 grayscale m-4 border"
  />
);

const NewsTitle = ({ title }: { title: string }) => (
  <p className="text-4xl m-4">{title}</p>
);

const Button = ({ time }: { time: number }) => (
  <div className="bg-theme-base-content text-theme-base-100 m-4 px-6 py-6 font-alt font-bold text-center">
    {time} min read
  </div>
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
                if (index === 0) {
                  return (
                    <Link href={`/news/${slug}`} key={index}>
                      <a>
                        <NewsItem align="left">
                          <Thumbnail src={feature_image} />
                          <NewsTitle title={title} />
                          <Button time={reading_time} />
                        </NewsItem>
                      </a>
                    </Link>
                  );
                } else if (index === 1) {
                  return (
                    <Link href={`/news/${slug}`} key={index}>
                      <a>
                        <NewsItem align="right">
                          <Button time={reading_time} />
                          <Thumbnail src={feature_image} />
                          <NewsTitle title={title} />
                        </NewsItem>
                      </a>
                    </Link>
                  );
                }
                return (
                  <Link href={`/news/${slug}`} key={index}>
                    <a>
                      <NewsItem align="right">
                        <Button time={reading_time} />
                        <NewsTitle title={title} />
                        <Thumbnail src={feature_image} />
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
