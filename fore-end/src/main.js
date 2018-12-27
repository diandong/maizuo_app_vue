// 前端项目入口js文件

import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App'

// 引入第三方包

// Mint:引入mint-ui
import Mint from 'mint-ui'
// Mint:引入css
import 'mint-ui/lib/style.css'

// 引入mockjs , !!!!! 上线时要删除
import '../src/mock/mockData'
// import '../src/mock/shopData'

// Mint:安装插件
Vue.use(Mint)

// 去除vue开发时的浏览器 console 中提示
Vue.config.productionTip = false
/* eslint-disable no-new */
// 创建vue实例
new Vue({
  el: '#app',
  router, // 键值对相同,可简写
  store,
  // 局部组件
  components: { App },
  template: '<App/>'
})
