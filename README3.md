# import 与 @import 是什么区别？

# link 与 @import 的区别？

- link 标签是 html 的标签元素
- @import 是css提供的一种可以引入别的css文件的 功能
- link 标签 除了能引入外部样式文件，还可以干别的。。。
- @import 只能用来导入样式
- @import 有兼容性 css2.x 提供的。
- 效率。有一定的阻塞。。

# sass 与 less 中可以经常性的看到 这种 @import

# import 跟 nodejs 中 require 非常像。

# 跨域的产生原因

> 由于浏览器的同源策略。

# 解决跨域的方法

- jsonp
- cors
- 正向代理
- 反向代理

# 正向代理

> 浏览器与服务器中间加了一个 nodejs 服务中间层

A - 浏览器   http://localhost:8080

B - 服务器   http://localhost:3000

C - 中间层 （服务端器） http://localhost:8080

A - C - B
B - C - A

vue-cli 2.x 的版本中，我们去 config/index.js  dev  proxyTable 配置。。。。。


# 路由跳转是使用 router-link  a标签

> 可以通过js的代码来操作路由的跳转。 $route - 当前的路由对象  $router - 路由管理器对象
> 通过路由管理对象，就可是实现 编程式导航

- this.$router.push() - 追加  router-link to
- this.$router.replace() - 替换 router-link replace
- this.$router.go(n) n - Number 如果是正数 前进 , 负数 后退

push 与 replace 都可以传 字符串的path路径。要么是传 对象
