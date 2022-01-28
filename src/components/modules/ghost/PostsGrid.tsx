import { BlogCard } from "./BlogCard";
import { useRouter } from "next/router";

import { Container, Pagination } from "components/elements";
import { GhostFilterPost, postsBrowserSelector } from "./state";
import { useAsyncRecoilValue } from "./hooks";

interface PostsGridProps {
  filter?: GhostFilterPost;
}

export const PostsGrid = ({ filter = {} }: PostsGridProps) => {
  const router = useRouter();
  const { loading, value: posts } = useAsyncRecoilValue(postsBrowserSelector, [
    filter,
  ]);

  const { pagination = {} } = (posts && posts["meta"]) || {};

  const onPageChange = (e: any) => {
    router.replace({
      pathname: "/news",
      query: {
        page: e.page,
        limit: e.rows,
      },
    });
  };

  return (
    <Container className="max-w-4xl py-20 px-4">
      <div className="grid grid-cols-1 space-y-20">
        {loading && <div>Loading...</div>}
        {Array.isArray(posts) &&
          posts.map((post) => (
            <BlogCard key={post.slug} path="news" {...post} />
          ))}
      </div>
      <Pagination
        page={pagination?.page - 1}
        limit={pagination?.limit}
        total={pagination?.total}
        onPageChange={onPageChange}
      ></Pagination>
    </Container>
  );
};
