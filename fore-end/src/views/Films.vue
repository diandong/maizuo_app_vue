<template>
  <div class="films-list">
    <div class="bannerBox">
      <!-- 定位城市 -->
      <div class="city">
        <span>{{ curCity }}</span>
        <i class="SJ"></i>
      </div>
      <!-- swiper 轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../images/banner2.jpg">
          </div>
          <div class="swiper-slide">
            <img src="../images/banner3.jpg">
          </div>
          <div class="swiper-slide">
            <img src="../images/banner4.jpg">
          </div>
          <div class="swiper-slide">
            <img src="../images/banner5.jpg">
          </div>
          <div class="swiper-slide">
            <img src="../images/banner7.jpg">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!-- movieList -->
    <div class="btnBox">
      <!-- <button class="btn active" type="button" @click="switchList('now')">正在热映</button> -->
      <router-link tag="span" to="/films/nowPlaying" active-class="active" class="btn">正在热映</router-link>
      <router-link tag="span" to="/films/bookingMovie" active-class="active" class="btn">即将上映</router-link>
      <!-- 过渡动画 -->
      <div class="bar-lf" v-if="type === 'A'">
        <span class="tab_bar"></span>
      </div>
      <div class="bar-rt" v-if="type === 'B'">
        <span class="tab_bar"></span>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// 引入Swiper请求
import Swiper from 'swiper'

export default {
  name: 'Films',
  data () {
    return {
      type: 'B',
      // 当前城市
      curCity: ''
    }
  },
  methods: {
    /**
     *  获取当前的城市名称,这里的百度地图api.js为在此引入,所有此处BMap会报未定义
     * */
    getCityName () {
      /* eslint-disable */
      console.log(BMap)
      var myCity = new BMap.LocalCity()
      myCity.get(result => {
        this.curCity = result.name
      })
    },
    /**
     * 编程式导航,还可以传递参数对象,.push({name:'路由name值',query:{id:1,name:2}})
     * 切换路由判断
     */
    switchList (type) {
      if (type === 'now') {
        this.$router.push('/films/nowPlaying')
      } else {
        this.$router.push('/films/bookingMovie')
      }
    }
    
  },
  //swiper
  mounted () {
      new Swiper('.swiper-container', {
        loop: true, // 循环模式
        autoplay: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }
      })
    },
  created () {
    this.getCityName()
  }
}
</script>

<style lang='scss'>
// @import '../styles/common/px2rem' @ = src 路径
@import "@/styles/common/px2rem.scss";
@import "swiper/dist/css/swiper.min.css";
.films-list {
  overflow: auto;
  flex: 1;
  width: 100%;
  .bannerBox {
    width: px2rem(640);
    height: px2rem(360);
    position: relative;
    .city {
      position: absolute;
      z-index: 3;
      top: px2rem(30);
      left: px2rem(30);
      width: px2rem(100);
      height: px2rem(60);
      background: #0000005e;
      border-radius: px2rem(30);
      color: #fff;
      line-height: px2rem(60);
      text-align: center;
      font-size: px2rem(24);
    }
    .swiper-container {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
      .swiper-pagination-bullet {
        width: px2rem(14);
        height: px2rem(14);
        background: none;
        border: px2rem(2) solid #e4e4e4;
      }
      .swiper-pagination-bullet-active {
        background: #fff;
      }
    }
  }
    .btnBox {
    display: flex;
    width: 100%;
    height: px2rem(98);
    position: relative;
    position: sticky;
    top: 0;
    z-index: 2;
    .btn {
      float: left;
      flex: 1;
      display: block;
      outline: none;
      background: #fffffff1;
      font-size: px2rem(28);
      line-height: px2rem(98);
      text-align: center;
    }
    .active {
      color: #ff5f16;
    }
    // .v-enter {
    //   position: absolute;
    //   width: 50%;
    //   bottom: 0;
    // }
    .bar-lf {
      position: absolute;
      width: 50%;
      bottom: 0;
      .tab_bar {
        width: px2rem(112);
        border-bottom: px2rem(4) solid #ff5f16;
        display: block;
        margin: auto;
      }
    }
    .bar-rt {
      position: absolute;
      width: 50%;
      right:0;
      bottom: 0;
      .tab_bar {
        width: px2rem(112);
        border-bottom: px2rem(4) solid #ff5f16;
        display: block;
        margin: auto;
      }
    }
  }
  .btnBox:after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 2px solid #ededed;
    color: #ededed;
    -webkit-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    -ms-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
}
</style>
