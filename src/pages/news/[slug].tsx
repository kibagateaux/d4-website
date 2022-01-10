import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import type { NextPageContext } from "next";

import { BlogPageTemplate } from "components/templates";

const Page = () => {
  const router = useRouter();
  const { t } = useTranslation(["news"]);
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>{t("news.head")}</title>
      </Head>

      <BlogPageTemplate slug={`${slug}`} />
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
