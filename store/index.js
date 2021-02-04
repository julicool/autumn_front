export const state = () => ({
  name : 'jagi',
  thisDay:"",
  tomorrow:""
});

export const mutations = {
  sayHello(state){
    state.name += ", 你好";
  },
  updateThisDay(state,params){
    state.thisDay = params;
  },
  updateTomorrow(state,params){
    state.tomorrow = params;
  }

};

export const actions = {
  getThisDay({commit}){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    if(month < 10){
      month = "0" + month;
    }
    let day = date.getDate();
    commit('updateThisDay',year+"-"+month+"-"+day);
  },
  getTomorrow({commit}){
    let date = new Date();
    date.setTime(date.getTime() + 24*60*60*1000);
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    if(month < 10){
      month = "0" + month;
    }
    let day = date.getDate();
    commit('updateTomorrow',year+"-"+month+"-"+day);
  }
};

