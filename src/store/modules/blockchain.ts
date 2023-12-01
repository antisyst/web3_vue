import { Module } from 'vuex';
import { RootState } from '../../types';

export interface BlockchainState {
  bitcoinBalance: number;
  ethereumBalance: number;
  loading: boolean;
}

const blockchain: Module<BlockchainState, RootState> = {
  state: {
    bitcoinBalance: 0,
    ethereumBalance: 0,
    loading: false,
  },
  mutations: {
    setBitcoinBalance(state, balance: number) {
      state.bitcoinBalance = balance;
    },
    setEthereumBalance(state, balance: number) {
      state.ethereumBalance = balance;
    },
    setLoading(state, loading: boolean) {
      state.loading = loading;
    },
  },
  actions: {
    async checkBalance({ commit }, address: string) {
      commit('setLoading', true);
      const bitcoinBalance = Math.random() * 10;
      const ethereumBalance = Math.random() * 10; 
      commit('setBitcoinBalance', bitcoinBalance);
      commit('setEthereumBalance', ethereumBalance);
      commit('setLoading', false);
      console.log(address);
    },
  },
};

export default blockchain;
