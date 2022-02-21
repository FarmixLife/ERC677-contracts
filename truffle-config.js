const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = 'stuff whale observe panther abstract tell income melody midnight stomach drive pole';

module.exports = {
  networks: {
    bscTestnet: {
      provider: () => new HDWalletProvider(
        mnemonic, 
        
        'https://data-seed-prebsc-1-s1.binance.org:8545/'
      ),
      
      network_id: 97,
      gas: 5000000,
      gasPrice: 40000000000,
      timeoutBlocks: 400,
      skipDryRun: false,
      websocket: true,
      timeoutBlocks: 90000,
      networkCheckTimeout: 9000000
    },
    lbTestnet: {
      provider: () => new HDWalletProvider(
        mnemonic, 
        'https://rpc.latam-blockchain.com'
      ),
      network_id: 172,
      skipDryRun: false,
      networkCheckTimeout: 1000000000,
      timeoutBlocks: 200, 
      gasPrice: 10000000000,

    }

  },
  compilers: {
    solc: {
      version: "0.8.3"
    }
  },
  plugins: ["solidity-coverage"]

}