import { PostPage } from "components/modules";

interface BlogPageTemplateProps {
  slug: string
}

export const BlogPageTemplate = ({ slug } : BlogPageTemplateProps) => {
  return (
    <>
      <PostPage slug={slug}/>
    </>
  );
};
