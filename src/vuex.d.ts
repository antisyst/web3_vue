import { Store as VuexStore, CommitOptions, DispatchOptions, Module } from 'vuex';

declare module 'vuex' {
  type RootStore = Omit<VuexStore<RootState>, 'getters' | 'commit' | 'dispatch'> & {
    commit<K extends keyof RootMutations>(
      key: K,
      payload: Parameters<RootMutations[K]>[1],
      options?: CommitOptions
    ): ReturnType<RootMutations[K]>;
  } & {
    dispatch<K extends keyof RootActions>(
      key: K,
      payload: Parameters<RootActions[K]>[1],
      options?: DispatchOptions
    ): ReturnType<RootActions[K]>;
  } & {
    getters: {
      [K in keyof RootGetters]: ReturnType<RootGetters[K]>;
    };
  };

  interface Store extends RootStore {}

  type StoreModule = Module<any, any>;

  function useStore(key?: string): Store;
}
