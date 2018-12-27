# 定位 html5 geoLocation

- 百度地图 （http://lbsyun.baidu.com/）
- 腾讯地图
- 高德地图

# 请求数据，ajax  jquery axios

# axios

- 轻量、方便、promise链式调用、可以二次封装、请求拦截、响应拦截

使用：
1. 安装 yarn add axios
2. 哪里要用，就在那里引入
3. 调用 axios.get()   axios.post()  axios.put()  axios.delete() axios({})

# 稍微真实一些的简单一些的假数据   mockjs

使用：
1. 安装 yarn add mockjs
2. 在src目录下新建一个 mockdata.js 。并且写上mock假数据的东西
3. main.js 中引入  mockData.js 文件
4. 这个时候，我们的一些ajax请求就会被 mockjs 给拦截。返回的数据就是 mockjs 生成的假数据

# 组件化开发的好处：

1. 提供代码的可复用性
2. 减少代码之间的耦合度
3. 提高代码编写速度
