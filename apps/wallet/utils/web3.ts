import Web3ETH from "wallet-javascript";

export function createWeb3() {
  return new Web3ETH({
    url: "https://ropsten.infura.io/v3/be30c9328ce14752a6f27b3b986312c7",
  });
}
