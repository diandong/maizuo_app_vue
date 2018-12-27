# 使用步骤

1. 安装 yarn add vuex
2. 可以像 router.js 一样，在src下面创建一个 store.js
3. 编辑 store.js 文件



4. 在main.js（入口js文件| new Vue 那个文件）引入第2步的 store.js 。并且可以使用一个叫做 store 的选项配置进去



-----

# vuex 是什么?

> 专门为 Vue.js 提供的状态管理器。

# vuex 在什么情况下用


# vuex 怎么使用

1. 安装
2. 编辑 store 实例
3. main.js 中  new Vue 进行处理

# vuex 核心是 一个 store
new Vuex.Store({
  state: {

  },

  getters: {

  },

  mutaions: {

  },

  actions: {
    <!-- 做完异步之后，来提交 mutaions -->
  },

  moudules: {
    <!-- jiang  store 分割成 多个 小  store -->
  }

})


mapState({}) 与 mapGetters 放在组件中  computed 里面

mapMutainsf 与 mapActions 放在组件中  methods 里面


购物车代码：

1. store 里面 定义了一个  filmsCard = [];

2. mutaions 里面定义了 二个  方法。 addFilm    reduceFilm

  addFilm : 思路
    1. 判断当前电影是否存在于购物车中。
    2. 存在即对其里面的 filmNum ++
    3. 不存在即做 push

  reduceFilm: 思路
    1. 判断当前电影是否存在于购物车中
    2. 存在
       1. 判断当前的 filmNum 是否大于 1.
       2. 大于1 ，则操作 减1
       3. 就操作删除这个商品


组件中的那个 input 显示当前这个电影的 购票数量
1. 请求 后台数据的时候，直接对数据操作，遍历这份数据，对立面主动加上一个 num 的属性，并设置为 0


2. 使用  $set 的方法 来操作 num 并使其能够在页面中响应


3. （最终的实现）通过一个方法。去做得遍历。
    store.filmsCard.forEach(item => {
      if (item.filmId === 当前这个电影的id) {
        return item.filmNum
      } else {
        return 0;
      }
    })
