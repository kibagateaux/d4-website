import { GhostFilterPost, PostsGrid } from "components/modules";
import Footer from "../landing/Footer";

interface BlogTemplateProps {
  filter?: GhostFilterPost;
}

export const BlogTemplate = ({ filter }: BlogTemplateProps) => {
  return (
    <>
      <PostsGrid filter={filter} />
      <Footer />
    </>
  );
};
