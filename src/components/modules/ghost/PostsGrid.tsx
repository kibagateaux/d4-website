import { Container } from "components/elements";
import { BlogCard } from "./BlogCard";

import { GhostFilterPost, postsBrowserSelector } from "./state";
import { useAsyncRecoilValue } from "./hooks";

interface PostsGridProps {
  className?: string;
  title: string;
  description?: string;
  filter?: GhostFilterPost;
}

export const PostsGrid = ({
  title,
  description,
  filter = {},
}: PostsGridProps) => {
  const {
    loading,
    value: posts,
  } = useAsyncRecoilValue(postsBrowserSelector, [filter]);

  return (
    <Container className="max-w-4xl py-20 px-4">
      <h2 className="mb-4 text-3xl font-bold text-center sm:leading-none lg:text-4xl xl:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className="mb-8 text-center text-base sm:text-xl lg:text-lg xl:text-xl"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {loading && <div>Loading...</div>}
        {Array.isArray(posts) &&
          posts.map((post) => (
            <BlogCard key={post.slug} path="news" {...post} />
          ))}
      </div>
      {!Array.isArray(posts) && posts.meta?.pagination && (
        <div>{JSON.stringify(posts.meta?.pagination)}</div>
      )}
    </Container>
  );
};
