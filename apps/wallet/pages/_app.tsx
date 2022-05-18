import * as React from "react";
import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";

import { NextPageWithLayout } from "../types/next";
import Web3ETH from "wallet-javascript";
import { Web3Provider } from "../hooks/useWeb3";
import { useRouter } from "next/router";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  const Layout = Component.Layout ?? DefaultLayout;

  React.useEffect(() => {
    router.prefetch("/");
  }, [router]);

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
