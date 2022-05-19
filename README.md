# Crypto Wallet

## <a href="https://crypto-wallet-orpin.vercel.app/" target="_blank">Demo</a>

![demo-gif](https://cdn.jsdelivr.net/gh/seonghyeonkimm/crypto-wallet/docs/wallet-demo.gif)

## Development

```sh
yarn # install dependencies and devDependencies
yarn dev # start next.js
```

## Overview

- [turborepo](https://turborepo.org/)를 사용해서 dapps sdk와 dapps를 monorepo형태로 구현했습니다.

## Packages

- wallet-javascript
  - dapps에서 사용할 javascript sdk를 만든다는 생각으로 작업했습니다.
  - 블록체인에 대한 이해 및 web3.js에 대한 이해가 충분하지 않아 많이 미흡합니다.
  - 사용한 라이브러리
    - [web3.js](https://web3js.readthedocs.io/en/v1.7.3/getting-started.html)

## Apps

- wallet
  - 위의 wallet-javascript를 사용해서 crypto 지갑 웹 서비스를 작업했습니다.
  - 사용한 라이브러리
    - [react](https://ko.reactjs.org/)
    - [next.js](https://nextjs.org/)
    - wallet-javascript

## 회고

- 블록체인 및 관련 라이브러리에 대한 이해가 부족해서 정확히 이해하지 못하고 구현한 부분이 많습니다.
- 보안적으로 account privateKey를 어떻게 보관하고 사용해야할지에 대해서 생각해보다가 처음에 선택한 방법은 httpOnly cookie로 저장해서 사용하는 것이었습니다.
  - 그런데, 나중에 생각해보니 브라우저에는 sessionId만 노출하고, 서버에서만 privateKey를 들고 있으면 좋을까 생각했고,
  - 더 생각해보니 privateKey 자체는 정말로 너무 private하고 굉장히 중요한 정보라서 중앙서버가 그대로 알고 있기 보단 암호화해서 가지고 있거나 혹은 브라우저에 저장하는게 오히려 더 안전할 수 있겠다는 생각을 했습니다. password와 seed phrase를 사용해서 암호화와 보안에 더 신경썼어야했는데, 관련 내용에 대한 이해가 부족해서 구현하지 못했습니다.
