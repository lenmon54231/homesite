import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 当前购物车的电影(经过了数量整理)
    carMovie: JSON.parse(window.localStorage.getItem('tempMovie')) ? JSON.parse(window.localStorage.getItem('tempMovie')) : [],
    //数量
    totalNumber: window.localStorage.getItem('totalNumber') ? window.localStorage.getItem('totalNumber') : 0,
    //当前的滚动高度
    scrollPosition: 0
  },
  mutations: {
    setShopCar(state, arg) {
      //查重，index= -1 没有发现重复，push进数组。
      let index = this.state.carMovie.findIndex(v => v.title == arg.title)
      if (index == -1) {
        arg.account = 1;
        this.state.carMovie.push(arg);
      } else {
        this.state.carMovie[index].account++;
      }
      this.state.totalNumber++;
      // 将整理后的购物车电影存入本地
      window.localStorage.setItem('tempMovie', JSON.stringify(this.state.carMovie));
      window.localStorage.setItem('totalNumber', this.state.totalNumber)
    },
    subShopcar(state, arg) {
      let nowMovie = this.state.carMovie;
      let index = arg.index;
      if (arg.subAll) {
        this.state.totalNumber = this.state.totalNumber - nowMovie[index].account;
        nowMovie.splice(index, 1);
      } else {
        if (nowMovie[index].account > 1) {
          nowMovie[index].account--;
        } else {
          nowMovie.splice(index, 1);
        }
        this.state.totalNumber--;
      }
      // 将整理后的购物车电影存入本地
      window.localStorage.setItem('tempMovie', JSON.stringify(nowMovie));
      window.localStorage.setItem('totalNumber', this.state.totalNumber)
    },
    setScrollPosition(state, position) {
      state.scrollPosition = position
    }
  },
  actions: {
  },
  modules: {
  }
})
