import { TFunction } from "next-i18next";

import { PostPage } from "components/modules";
import Footer from "../landing/Footer";

interface BlogPageTemplateProps {
  slug: string;
  t: TFunction;
}

export const BlogPageTemplate = ({ slug, t }: BlogPageTemplateProps) => {
  return (
    <>
      <PostPage slug={slug} t={t} />
      <Footer />
    </>
  );
};
