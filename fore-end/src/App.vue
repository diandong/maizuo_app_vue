<template>
  <div id="app">
    <!-- 过渡动画 -->
    <transition
      mode="out-in"
      appear
      enter-active-class="animated slidelnRight"
      leave-active-class="animated slideOutLeft"
    >
    <!-- 一级路由 坑 -->
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './styles/base.scss';

</style>
