export interface RootState {
    blockchain: BlockchainState;
  }
  
  export interface BlockchainState {
    bitcoinBalance: number;
    ethereumBalance: number;
    loading: boolean;
  }
  
  export interface BitcoinState {
    bitcoinBalance: number;
  }
  
  export interface EthereumState {
    ethereumBalance: number;
  }
  