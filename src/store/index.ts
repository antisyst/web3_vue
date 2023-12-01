import { createStore } from 'vuex';
import blockchain from './modules/blockchain';

export default createStore({
  modules: {
    blockchain,
  },
});
