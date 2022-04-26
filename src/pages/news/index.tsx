import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import type { NextPageContext } from "next";

import { BlogTemplate } from "components/templates";
import { GhostFilterPost, SEOTags } from "components/modules";
import Header from "components/templates/landing/Header";

interface composeFilterProps {
  filter: string | string[] | undefined;
  limit: string | string[] | undefined;
  page: string | string[] | undefined;
  order: string | string[] | undefined;
}

const composeFilter = ({
  filter,
  limit,
  page,
  order,
}: composeFilterProps): GhostFilterPost => {
  const hasValue = (value: string | string[] | undefined): boolean =>
    value || (Array.isArray(value) && value[0]);
  const getValue = (value: string | string[] | undefined): string =>
    Array.isArray(value) ? value[0] : value || "";

  const result: any = {};
  if (hasValue(filter)) {
    result.filter = getValue(filter);
  }
  if (hasValue(limit)) {
    result.limit = parseInt(getValue(limit));
  }
  if (hasValue(page)) {
    result.page = parseInt(getValue(page));
  }
  if (hasValue(order)) {
    result.order = getValue(order);
  }

  return result;
};

const Page = () => {
  const router = useRouter();
  const { t } = useTranslation(["news"]);
  const { filter, limit, page, order } = router.query;

  const ghostFilter = composeFilter({ filter, limit, page, order });

  const seo = {
    title: t("news.seo.title"),
    description: t("news.seo.description"),
    keywords: t("news.seo.keywords"),
    image: t("news.seo.image"),
    author: t("news.seo.author"),
    twitterSite: t("news.seo.twitterSite"),
    twitterCreator: t("news.seo.twitterCreator"),
  };


  return (
    <>
      <SEOTags {...seo} />
      <Header />
      <BlogTemplate filter={ghostFilter} />
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
