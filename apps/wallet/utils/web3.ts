import Web3ETH from "wallet-javascript";

export function createWeb3() {
  return new Web3ETH({
    url: "HTTP://127.0.0.1:7545",
  });
}
