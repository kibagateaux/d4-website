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
    className={`flex flex-col md:flex-row mb-12 overflow-hidden w-full space-y-2 md:space-x-16 md:items-center hover:opacity-80 group ${
      align === "right"
        ? "items-end md:justify-end"
        : "items-start md:justify-start"
    }`}
  >
    {children}
  </div>
);

const Thumbnail = ({ src }: { src: string }) => (
  <img
    src={src}
    alt=""
    className="object-cover h-32 md:h-20 w-full md:w-72 grayscale group-hover:grayscale-0 border"
  />
);

const NewsTitle = ({ title }: { title: string }) => (
  <p className="text-2xl md:text-4xl">{title}</p>
);

const Button = ({ time }: { time: number }) => (
  <div className="bg-theme-base-content group-hover:bg-theme-primary text-theme-base-100 px-6 py-6 font-alt font-bold text-center">
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
        <p className="text-7xl md:text-9xl font-alt font-bold">Blog</p>

        {/* Mobile version */}
        <div className="block md:hidden space-y-16">
          {Array.isArray(posts) &&
            posts.map(
              (
                { feature_image, reading_time, title, slug }: any,
                index: number
              ) => (
                <Link href={`/news/${slug}`} key={index}>
                  <a className="p-4 overflow-hidden">
                    <NewsItem align="left">
                      {feature_image && <Thumbnail src={feature_image} />}
                      <NewsTitle title={title} />
                      <div className="flex justify-end w-full">
                        <Button time={reading_time} />
                      </div>
                    </NewsItem>
                  </a>
                </Link>
              )
            )}
        </div>

        {/* Desktop version */}
        <div className="hidden md:block space-y-8 pt-8">
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
                          {feature_image && <Thumbnail src={feature_image} />}
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
                          {feature_image && <Thumbnail src={feature_image} />}
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
                        {feature_image && <Thumbnail src={feature_image} />}
                      </NewsItem>
                    </a>
                  </Link>
                );
              }
            )}
        </div>

        <div className="flex justify-center py-12">
          <AnimatedLink text="view all" href="/news" />
        </div>
      </Container>
    </section>
  );
};

export default News;
