import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import type { NextPageContext } from "next";

import { BlogPageTemplate } from "components/templates";
import Header from "components/templates/landing/Header";

const Page = () => {
  const router = useRouter();
  const { t } = useTranslation(["news"]);
  const { slug } = router.query;

  return (
    <>
      <Header />
      <BlogPageTemplate slug={`${slug}`} t={t} />
    </>
  );
};

export default Page;

export const getServerSideProps = async ({
  locale = "es",
}: NextPageContext) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "news"])),
  },
});

Page.layout = "Landing";
