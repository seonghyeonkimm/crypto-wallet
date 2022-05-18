import * as React from "react";
import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";

import { NextPageWithLayout } from "../types/next";
import Web3ETH from "wallet-javascript";
import { Web3Provider } from "../hooks/useWeb3";

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
      <Web3Provider>
        <Component {...pageProps} />
      </Web3Provider>
    </Layout>
  );
}

export default MyApp;
