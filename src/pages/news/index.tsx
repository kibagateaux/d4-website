import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import type { NextPageContext } from "next";

import { BlogTemplate } from "components/templates";
import { GhostFilterPost } from "components/modules";

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
  console.log("router.query", router.query);

  const ghostFilter = composeFilter({ filter, limit, page, order });

  console.log("ghostFilter", ghostFilter);

  return (
    <>
      <Head>
        <title>{t("news.head")}</title>
      </Head>

      <BlogTemplate title="DEMO" filter={ghostFilter} />
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
