import { GhostFilterPost, PostsGrid } from "components/modules";

interface BlogTemplateProps {
  title: string
  description?: string
  filter?: GhostFilterPost
}

export const BlogTemplate = ({ title, description, filter } : BlogTemplateProps) => {
  return (
    <>
      <PostsGrid title={title} description={description} filter={filter}/>
    </>
  );
};
