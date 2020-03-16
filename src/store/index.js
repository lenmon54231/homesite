import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 当前购物车的电影(经过了数量整理)
    carMovie: [],
    //数量
    totalNumber: 0,
    //当前的滚动高度
    scrollPosition: 0
  },
  mutations: {
    setShopCar(state, arg) {
      //处理数组中的重复项，将重复项剔除，并且account 加一
      for (let i = 0; i < arg.length; i++) {
        for (let j = 0; j < arg.length; j++) {
          if (i != j && arg[i].object.title == arg[j].object.title) {
            arg.splice(j, 1);
            j = 0;
            arg[i].account += 1;
          }
        }
      };
      state.carMovie = arg;
      var argTem = JSON.stringify(arg);
      window.localStorage.setItem('tempMovie',argTem);
      // 电影的数量
      var total = 0;
      for (let i = 0; i < arg.length; i++) {
        total += arg[i].account;
      };
      state.totalNumber = total;
    },
    setScrollPosition(state,position){
      state.scrollPosition = position
    }
  },
  actions: {
  },
  modules: {
  }
})
