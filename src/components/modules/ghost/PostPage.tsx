import { TFunction } from "next-i18next";

import { Container } from "components/elements";
import { postsReadSelector } from "./state";
import { SEOTags } from "..";
import { useAsyncRecoilValue } from "./hooks";
import Author from "./PostAuthor";
import Content from "./PostContent";
import Metadata from "./PostMetadata";
import ShareButtons from "./PostShareButtons";
import Title from "./PostTitle";

interface PostProps {
  authorDescription: string;
  authorImage: string;
  authorName: string;
  date: string;
  featureImage: string;
  html: string;
  readingTime: number;
  title: string;
  url: string;
}

const Post = (post: PostProps) => (
  <>
    <div className="space-y-3 lg:space-y-6 pb-20">
      <Title title={post.title} />
      <Metadata date={post.date} readingTime={post.readingTime} />
      {post.featureImage && (
        <img
          src={post.featureImage}
          className="object-cover w-full max-w-3xl mx-auto"
          alt=""
        />
      )}
      <Content html={post.html} />
      <div className="py-8">
        <ShareButtons url={post.url} />
      </div>
      <Author
        image={post.authorImage}
        name={post.authorName}
        description={post.authorDescription}
      />
    </div>
  </>
);

interface PostPageProps {
  slug: string;
  t: TFunction;
}

export const PostPage = ({ slug, t }: PostPageProps) => {
  const {
    loading,
    error,
    value: post,
  } = useAsyncRecoilValue(postsReadSelector, [slug]);

  const author = post.authors && post.authors.length > 0 ? post.authors[0] : {};
  console.log("POST: ", post);

  const seoData = {
    title: post.meta_title || post.title,
    description: post.meta_description,
    keywords: '',
    image: post.feature_image,
    author: author.name,
    twitterSite: post.twitter_title,
    twitterCreator: post.twitter_description,
  };

  return (
    <>
      <SEOTags {...seoData}/>

      <Container className="max-w-4xl py-20 px-4">
        {loading && <div>{t("news.loading")}</div>}

        {!loading &&
          (error ? (
            t("news.generic-error")
          ) : post ? (
            <Post
              authorDescription={author.bio || author.meta_description || "-"}
              authorImage={author.profile_image || post.twitter_image}
              authorName={author.name}
              date={post.published_at}
              featureImage={post.feature_image}
              html={post.html}
              readingTime={post.reading_time}
              title={post.title}
              url={post.url}
            />
          ) : (
            t("news.not-found")
          ))}
      </Container>
    </>
  );
};
