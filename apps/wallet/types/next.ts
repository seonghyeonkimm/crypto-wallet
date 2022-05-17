import { NextPage } from "next/types";

export type NextPageWithLayout<P = Record<string, unknown>> = NextPage<P> & {
  Layout?: React.FC<{ children: React.ReactNode }>;
};
