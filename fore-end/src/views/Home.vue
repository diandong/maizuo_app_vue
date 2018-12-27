<template>
  <div class="home">
    <!-- 过渡动画 -->
    <transition
    mode="out-in"
    enter-active-class="animated bounceInUp"
    leave-active-class="animated bounceOutDown">
    <!-- 二级路由切换,的坑 films/  center/ -->
    <router-view></router-view>
    </transition>
    <barMenu></barMenu>
  </div>
</template>

<script>
// 引入组件,在下面components对象中需要注册,才能使用
import barMenu from '../components/common/barMenu'

export default {
  name: 'Home',
  components: {
    barMenu
  }
}
</script>

<style lang="scss">
.home{
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
