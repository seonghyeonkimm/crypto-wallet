import * as React from "react";
import Web3ETH from "wallet-javascript";
import { createWeb3 } from "../utils/web3";

const Web3Context = React.createContext(null as unknown as Web3ETH);

export const useWeb3 = () => {
  const web3 = React.useContext(Web3Context);

  if (!web3) {
    throw new Error("useWeb3 should be used inside Web3Context.Provider");
  }

  return web3;
};

export const Web3Provider = ({ children }: React.PropsWithChildren<{}>) => {
  const { current: web3 } = React.useRef(createWeb3());

  return <Web3Context.Provider value={web3}>{children}</Web3Context.Provider>;
};
