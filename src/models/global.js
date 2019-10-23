export default {
  namespace: 'global',
  state: {
    theme: 'Cyan.DARK_THEME',
    classComponentCount: 0,
    hooksCount: 0
  },
  effects: {},
  reducers: {
    changeClassComponentCount(state, { payload }) {
      return {
        ...state,
        classComponentCount: payload.count
      };
    },
    clearClassComponentCount(state) {
      return {
        ...state,
        classComponentCount: 0
      };
    },
    changeHooksCount(state) {
      return {
        ...state,
        hooksCount: ++state.hooksCount
      };
    },
    clearHooksCount(state) {
      return {
        ...state,
        hooksCount: 0
      };
    }
  },
  subscriptions: {
    setup({ history }) {
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      return history.listen(({ pathname, search }) => {
        if (typeof window.ga !== 'undefined') {
          window.ga('send', 'pageview', pathname + search);
        }
      });
    }
  }
};
