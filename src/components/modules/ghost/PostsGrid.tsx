import { Container } from "components/elements";
import { BlogCard } from "./BlogCard";

import { GhostFilterPost, postsBrowserSelector } from "./state";
import { useAsyncRecoilValue } from "./hooks";

interface PostsGridProps {
  filter?: GhostFilterPost;
}

export const PostsGrid = ({ filter = {} }: PostsGridProps) => {
  const { loading, value: posts } = useAsyncRecoilValue(postsBrowserSelector, [
    filter,
  ]);

  return (
    <Container className="max-w-4xl py-20 px-4">
      <div className="grid grid-cols-1 space-y-20">
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
