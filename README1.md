# vue-cli 2.x

- 安装
```
npm install -g @vue/cli-init
```
- 创建 前端项目
```
vue init webpack fore-end
```

# vue-cli 2.x 拉取的项目的项目结构
- build
  - webpack.base.config.js    webpack 基本配置
  - webpack.dev.config.js     webpack 开发时的配置
  - webpack.prod.config.js    webpack 打包上线时的配置
- config  项目路径相关的一些配置
- node_modules 项目的依赖包
- src   项目的源代码的地方
- static  项目中不需要使用 webpack 来做模块加载的内容 ，主要放一些第三方不需要打包支持的内容 （hotcss）
- .babelrc babel 相关的配置 (支持我们es6 7 8 语法的东西)
- .editorconfig 编辑器相关的配置
- .eslintrc.js eslint相关配置
- .gitignore git 忽略文件的相关配置
- .postcssrc.js  样式样式的配置
- index.html     页面模板
- package.json   项目的描述文件
- README.md       项目的读我文件
- yarn.lock       npm | yarn 是用来处理依赖包的版本问题。

# 单文件组件 （.vue）一个文件就是一个组件，能够通过 esm 去引入
```js
3大块：

<template>
  // 组件的模板
</templte>

<script>
  // 暴露组件的选项对象
export default {

}
</script>

<style>
// 写样式
// PS: scoped 能够让我们当前样式只对当前的组件生效。。。。
</style>
```


# eslint 的好处：

# vue-cli 2.x 中使用 scss 文件，需要安装 node-sass sass-loader

# vue-cli 脚手架中使用 vue-router

1. 下载 npm install --save vue-router
2. 在 src 下面新建一个 router.js 文件。在这个文件中做 路由相关的配置
3. 在 src 下面 入口文件 main.js 中 引入第二步导出的路由管理器对象，并使用 router选项配置在 new Vue() 的地方。

PS: 用npm的方法下载的 vue-router ，需要使用 Vue.use() 来挂载一下。 router-link  router-view


# router-link tag 属性能够让 router-link 最终渲染成什么元素

# swiper 的使用 轮播图的插件

1. 安装 yarn add swiper
2.
