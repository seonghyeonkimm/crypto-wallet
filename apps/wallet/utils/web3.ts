import Web3ETH from "wallet-javascript";

export function createWeb3() {
  return new Web3ETH({
    url: "https://tn.henesis.io/ethereum/ropsten?clientId=815fcd01324b8f75818a755a72557750",
  });
}
