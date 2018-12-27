<template>
  <div class="cinema-list-box">
    <!-- 定位 标题 搜索 -->
    <header class="header">
      <div class="left">
        <div class="city">
          <span>深圳</span>
          <i class="iconfont icon-xiajiantoushixinxiao"></i>
        </div>
      </div>
      <div class="title">
        <div>影院</div>
      </div>
      <div class="right">
        <div>
          <i class="iconfont icon-sousuo"></i>
        </div>
      </div>
    </header>
    <!-- end -->
    <!-- 筛选 -->
    <div class="cinema-list-tag">
      <ul class="cinema-list-tag-name">
        <li>
          全城
          <i class="iconfont icon-xiajiantoushixinxiao"></i>
        </li>
        <li>
          最近去过
          <i class="iconfont icon-xiajiantoushixinxiao"></i>
        </li>
      </ul>
    </div>
    <!-- end -->
    <!-- 影院列表 -->
    <div class="cinema-list-wrap">
      <ul class="cinema-list">
        <li class="cinema-list-item">
          <a href class="cinema-item-wrap">
            <div class="cinema-info-lf">
              <span class="cinema-name">英皇电影城（东海缤纷店）</span>
              <span class="cinema-address">东海国际中心二期B区101之B1002号商铺</span>
            </div>
            <div class="cinema-info-rt">
              <div class="cinema-lowPrice">
                <i>$</i>
                <span>76</span>
                <span>起</span>
              </div>
              <span class="cinema-gpsAddress">距离未知</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cinema'
}
</script>

<style lang="scss">
// @import '../styles/common/px2rem'; @ = src 路径
@import "@/styles/common/px2rem.scss";
.cinema-list-box {
  flex: 1;
}
.header {
  display: flex;
  position: relative;
  top: 0;
  width: 100%;
  height: px2rem(88);
  font-size: px2rem(26);
  text-align: center;
  line-height: px2rem(88);

  .left {
    margin-left: px2rem(30);
    width: px2rem(96);
    height: px2rem(88);

    i {
      font-size: px2rem(26);
    }
  }

  .title {
    font-size: px2rem(34);
    width: px2rem(388);
    height: px2rem(88);
  }

  .right {
    margin-left: px2rem(40);

    .iconfont {
      text-align: right;
      font-size: px2rem(46);
    }
  }
}
.header::after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: px2rem(2);
  border-bottom: px2rem(2) solid #ededed;
  color: #ededed;
  -webkit-transform-origin: 0 100%;
  -ms-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  -ms-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.cinema-list-tag {
  display: flex;
  width: 100%;
  position: relative;
  height: px2rem(98);
  font-size: px2rem(26);
  text-align: center;
  line-height: px2rem(88);

  .cinema-list-tag-name {
    display: flex;
    width: 100%;
  }
  li {
    flex: 1;
    .iconfont {
      font-size: px2rem(26);
    }
  }
}
.cinema-list-tag:after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: px2rem(2);
  border-bottom: px2rem(2) solid #ededed;
  color: #ededed;
  -webkit-transform-origin: 0 100%;
  -ms-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  -ms-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.cinema-list-wrap {
  flex: 1;
  .cinema-list {
    float: left;
    height: 100%;
    .cinema-list-item {
      flex: 1;
      position: relative;
      width: 100%;
      height: px2rem(150);
      position: relative;
      background-color: #fff;
      padding: px2rem(30);
      font-size: px2rem(26);
    }
    .cinema-list-item::after {
      content: " ";
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: px2rem(2);
      border-bottom: px2rem(2) solid #ededed;
      color: #ededed;
      -webkit-transform-origin: 0 100%;
      -ms-transform-origin: 0 100%;
      transform-origin: 0 100%;
      -webkit-transform: scaleY(0.5);
      -ms-transform: scaleY(0.5);
      transform: scaleY(0.5);
    }
  }
}
</style>
