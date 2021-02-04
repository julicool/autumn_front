export const state = () => ({
  dairyList: [],
  dairyTotal: 0,
  dairyDetail: {},
});

export const mutations = {
  updateDairyList(state, data){
    state.dairyList = data.list;
    state.dairyTotal = data.total;
  },
  updateDairyDetail(state, data){
    state.dairyDetail = data;
  }
};

export const actions = {
  // 获取日记列表
  getDairyList({ commit, rootState }, params ={}) {
    this.$axios.get('/api/getDairy', {
      params: {
        startDate: params.startDate,
        endDate: params.endDate,
        page: params.page,
        pageSize: params.pageSize
      }
    }).then(
      res => {
        commit('updateDairyList',res.data.data)
      }
    )
  },
  getDairyById({ commit, rootState }, params ={}){
    this.$axios.get('/api/getDairyById',{
      params:{
        id: params.id
      }
    }).then(
      res => {
        commit('updateDairyDetail', res.data.data)
      }
    )
  }
};

export const getter = {
  latestDairy: state => {
    return state.dairyList.filter(dairy => dairy.list.createAt)
  }
}
