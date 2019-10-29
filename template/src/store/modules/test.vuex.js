export default {
  state: {
    list:[],
  },
  mutations: {
    setListHandle(state, data){
      state.list = data;
    },
  },
  getters: {
    getListHandle: state => state.list,
  },
  actions: {
    // 获取列表
    getListHandle({commit}){
        setTimeout(() => {
            commit('setListHandle', ['test'])
        }, 1000)
    },
  }
}