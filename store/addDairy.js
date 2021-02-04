import axios from "../.nuxt/axios";

export const state = () => ({
  addResult: false
});

export const mutation = {
  updateAddResult(state, data){
    state.addResult = data.success;
  }
}

export const actions = {
  addDairy({ commit, rootState}, params = {}){
    this.$axios.post('/api/addDairy',{
      content: params.content,
      isShow: 0,
      location: params.location,
      title: params.title,
      weather: params.weather
    }).then(
      res => {
        commit('updateAddResult', res.data)
      }
    )
  },
}
