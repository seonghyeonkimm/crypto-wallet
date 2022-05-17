# Crypto Wallet

## Overview
- create metamask
- crypto wallet which allows to create wallet and send transaction
- use ropsten (testnet) as my Dapps mainnet
  - https://tn.henesis.io/ethereum/ropsten?clientId=815fcd01324b8f75818a755a72557750

## Features

### dapps이 사용할 javascript sdk를 만들어라..!
- signUp
  - 지갑생성
- signIn
  - 지갑의 privateKey를 가져온다(?)

### dapps (지갑)
- signUp
- signIn
- web3 provider..?


## assessment standards
- 기능성
  - 요구사항에 맞게 올바른 결과를 제공하는지 확인합니다.
- 유지보수성
  - 재사용 가능한 컴포넌트 분리되어 있는지 확인합니다.
  - 빠르고 쉽게 테스트 할 수 있는지 확인합니다.
  - 코드가 구조적으로 잘 나뉘어져 있고 가독성이 좋은지 확인합니다.
- 사용성
-  다른 개발자가 쉽게 해당 코드를 실행하고 제어할 수 있도록 문서, 스크립트 등이 잘 제공되는지 확인합니다.
- 보안
  - 어떻게하면 고객의 비밀키를 안전하게 관리할지 고민합니다.
  - 해당 방법을 구현하면 좋고, 시간이 부족하다면 앞으로 어떻게 구현할지 방안을 제안합니다.


## questions
### required에 react, react-native로 되어있는데 앱으로 구성해야된다는 뜻일까요 ? 아니면 그냥 웹으로 구현해도 문제없을까요?
- react, react-native

- 과제의 요구사항 관련해서 dapp이 사용할 지갑 sdk


### History
- 문제에 대한 이해
  - web3.js를 사용해서 dapps가 사용할 수 있는 sdk를 만든다.
  - 직접 작업한 sdk를 사용해서 지갑 dapps를 만든다.
- web3.js를 사용해서 sdk를 만든다는 이해했다.
  - 그런데 여기서 회원가입이란 무엇이며, 로그인이란 무엇일까?
  - (????) 회원가입이란 지갑을 생성하는 것을 뜻하고,
  - (????) 로그인이란 seed phrase + password로 지갑 객체를 가져온다..?
  - web3 Provider란 로그인되어 있는 유저가 특정 액션을 할 수 있는 상태를 뜻하는 것으로 파악...
  - (????) 여기서 회원가입, 로그인이 무엇인지 모르겠다. web3js tutorial을 한번 찾아본다..(?)