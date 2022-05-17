import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";

import { NextPageWithLayout } from "../types/next";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? DefaultLayout;

  return (
    <Layout>
      <CssBaseline />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
