import Web3 from "web3";

// TODO: check requirement and improve
class Web3ETH {
  private web3: Web3;

  constructor({ url }: { url: string }) {
    this.web3 = new Web3(url);
  }

  // TODO: generate random seed phrase and encrypt it with password. And change accounts.create() to accounts.privateKeyToAccount
  signUp() {
    return this.web3.eth.accounts.create();
  }

  // TODO: change to use password and seedPhrase to get privateKey
  signIn(privateKey: string) {
    return this.web3.eth.accounts.privateKeyToAccount(privateKey);
  }

  async getBalance(
    address: string,
    unit: keyof ReturnType<Web3["utils"]["unitMap"]> = "ether"
  ) {
    const balance = await this.web3.eth.getBalance(address);
    return this.web3.utils.fromWei(balance, unit);
  }

  async signTransaction(
    privateKey: string,
    {
      to,
      value,
      gas = 20000000000,
    }: {
      to: string;
      value: string;
      gas?: number;
    }
  ) {
    const tx = await this.web3.eth.accounts.signTransaction(
      {
        to,
        value,
        gas,
      },
      privateKey
    );

    return tx;
  }
}

export default Web3ETH;
