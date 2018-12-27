// 路由相关的代码
import Vue from 'vue'
import VueRouter from 'vue-router'

// 一级路由
// 引入路由组件,下面添加一种异步写法,写在component后面
// import Home from './views/Home.vue'
// import Films from './views/Films.vue'
// import NowPlay from './components/NowPaly'
// import SoonPlay from './components/SoonPlay'
// import Cinema from './views/Cinema.vue'
// import Shop from './views/Shop.vue'
// import Center from './views/Center.vue'

// 插件安装
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      // 一级路由home
      path: '/',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: '',
          redirect: '/films/nowPlaying'
        },
        {
          // 首页
          path: 'films',
          component: () => import('./views/Films.vue'),
          children: [
            {
              path: '',
              redirect: '/films/nowPlaying'
            },
            {
              // 异步引入子模块
              path: 'nowPlaying',
              // name: 'nowPlaying',
              component: () => import('./components/NowPaly/index.vue')
            },
            {
              path: 'bookingMovie',
              component: () => import('./components/SoonPlay/index.vue')
            }
          ]
        },
        {
          // 影院页
          path: 'cinemas',
          component: () => import('./views/Cinema.vue')
        },
        {
          // 用户页
          path: 'center',
          component: () => import('./views/Center.vue')
        }
      ]
    },
    {
      // 详情页面
      path: '/film/:filmId',
      name: 'filmData',
      component: () => import('./components/filmsData/filmData.vue')
    },
    {
      // 商品列表
      path: '/shop',
      name: 'shop',
      component: () => import('./views/Shop.vue')
    },
    {
      // 商品详情
      path: '/shop/:id',
      name: 'filmData',
      component: () => import('./components/shopData/ShopData.vue')
    },
    {
      path: '/shopCart',
      component: () => import('./components/shopCart/shopCart.vue')
    }
  ]

})

// 暴露router,多个入口使用export default{}
export default router
