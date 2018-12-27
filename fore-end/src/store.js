// 0. 引入 Vue
import Vue from 'vue'
// 1. 引入 vuex
import Vuex from 'vuex'
// 2. use
Vue.use(Vuex)

// 3. 实例化 store 对象
const store = new Vuex.Store({
  // 一个仓库中有那写东西
  // 状态放置整个项目中所有能够全局共用的状态
  state: {
    curCity: '武汉市',
    // 购物车数量
    cartNum: 0,
    shopCar: []
  },
  // 对当前的 state 里面的状态...类型 计算属性
  getters: {

  },
  // 唯一能够修改 state 状态的东西 同步操作
  mutations: {
    /**
     * 修改购物车数据
     * @param {object} payload 商品内容
     *  id
     *  名称
     *  价格
     *  数量
     */
    addShop (state, payload) {
      // state.shopCar.push(payload)
      let id = payload.id
      let num = payload.num
      // 判断shopCar数组中的对象id
      let index = -1
      let isZai = state.shopCar.some((item, i) => {
        if (item.id === id) {
          index = i
          return true
        }
        return false
      })
      if (isZai) {
        state.shopCar[index].num += num
        state.cartNum = state.shopCar[index].num
      } else {
        state.shopCar.push(payload)
      }
    }
  },
  // 做异步操作
  actions: {

  },
  // 对 stote 做拆分,
  modules: {

  }
})

// 4. 暴露出 store 实例对象
export default store
