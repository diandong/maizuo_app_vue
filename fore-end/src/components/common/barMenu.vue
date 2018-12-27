// barMenu 组件
<template>
  <ul id="barMenu">
    <router-link
    v-for="(item, index) in bar"
    :key="index"
    :to="{ path: item.path}"
    tag="li"
    active-class="XZ">
      <i :class="item.icon"></i>
      <span v-text="item.name"></span>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'barMenu',
  data () {
    return {
      bar: [
        {
          id: 'nowPlaying',
          path: '/films',
          name: '电影',
          icon: 'iconfont icon-dianying'
        },
        {
          id: 'cinemas',
          path: '/cinemas',
          name: '影院',
          icon: 'iconfont icon-yingyuana'
        },
        {
          id: 'shop',
          path: '/shop',
          name: '团购',
          icon: 'iconfont icon-tuangou'
        },
        {
          id: 'center',
          path: '/center',
          name: '我的',
          icon: 'iconfont icon-tubiao-'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/common/px2rem.scss";
#barMenu {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: px2rem(98);
  width: 100%;
  background: #ebebeb;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #797d82;
    span {
      font-size: px2rem(24);
      padding-top: px2rem(10);
    }
    .icon-dianying {
      font-size: px2rem(42);
    }
    .icon-yingyuana {
      font-size: px2rem(42);
    }
    .icon-tuangou {
      font-size: px2rem(58);
      margin: px2rem(-10);
    }
    .icon-tubiao- {
      margin: px2rem(-4);
      font-size: px2rem(46);
    }
  }
  .XZ {
    color: #ff5f16;
  }
}
</style>
