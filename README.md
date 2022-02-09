
<p align="middle">
  Simple implementation of ERC-677 token contract
</p>


> This package is only to **use for testing purposes**

## Install

```
npm i 

## Usage

```js
const ERC677 = artifacts.require('erc677');

contract('My contract tests', async accounts => {
  let erc677;

  beforeEach(async () => {
    erc677 = await ERC677.new(
      accounts[0],
      web3.utils.toBN('1000000000000000000000'),
      'BSC',
      'BNB',
      web3.utils.toBN('18'),
    );
  });
});
```

## JS

```js
const Web3 = require('web3');
const ERC677Data = require('erc677/ERC677Data.json');
const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545')
const ERC677 = new web3.eth.Contract(ERC677Data.abi, ERC677Data.address.bscTestnet);
```

## Types

Supported contract's libraries are: 

* `web3` version 1.* - `web3-v1-contracts`
* `web3` version 2.* - `web3-v2-contracts`
* `truffle` - `truffle-contracts`
* `ethers` - `ethers-contracts`



## Versions

- Installing v1 will use Solidity v5
- Installing v2 will use Solidity v8

---

 ERC677Token:

