const state = {
  main: 0,
};

const mutations = {
  DECREMENT_MAIN_COUNTER(state: any) {
    state.main += 1;
  },
  INCREMENT_MAIN_COUNTER(state: any) {
    state.main -= 1;
  },
};

const actions = {
  someAsyncTask({ commit }: any) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER');
  },
};

export default {
  state,
  mutations,
  actions,
};
