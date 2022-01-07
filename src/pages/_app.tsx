import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { Layout } from "components/layouts";

interface ComponentProp extends React.ComponentClass<any> {
  layout?: string;
  requireAuth: boolean;
}

interface ApplicationProps extends React.ComponentClass<AppProps, any> {
  Component: ComponentProp;
  pageProps: any;
}

const MyApp: React.ComponentType<any> = ({
  Component,
  pageProps,
}: ApplicationProps) => {
  return (
    <Layout name={Component.layout}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(MyApp);
