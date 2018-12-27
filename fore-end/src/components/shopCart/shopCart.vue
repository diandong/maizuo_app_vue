<template>
  <div class="shopCart">
    <!--后退 header-->
    <div class="shop-header">
      <div class="goBack" @click="goBack">
        <i class="iconfont icon-arrow-right"></i>
      </div>
      <div class="title">{{ name }}</div>
    </div>
    <div class="shop_box">
      <ul class="shop_item">
        <li class="shop_list">
          <div class="info_photo">
            <img src="" alt="">
          </div>
          <div class="info">
            <p class="info_titel">商品名称 : 玫瑰花</p>
            <p class="info_price">单价 : 520</p>
            <p class="info_num">数量 : 100</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="summation">
      <span class="price">总价:
        <b>2999</b>
      </span>
      <button class="btn" @click="summation">结算</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shopCart',
  data () {
    return {
      name: '购物车'
    }
  },
  computed: {

  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/common/px2rem.scss";

.shopCart {
  flex: 1;
  overflow-y: auto;
  background: #f1f1f1;
  position: relative;
  .shop-header {
    position: relative;
    position: sticky;
    top: 0;
    height: px2rem(88);
    width: 100%;
    background: #ffffffda;
    z-index: 1;
    .goBack {
      position: absolute;
      top: px2rem(10);
      left: px2rem(10);
      width: px2rem(60);
      height: px2rem(60);
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      text-align: center;
      line-height: px2rem(60);
      i {
        font-size: px2rem(50);
      }
    }
    .title {
      text-align: center;
      line-height: px2rem(88);
      color:#494949;
    }
  }

  .shop_box{
    .shop_item{
      padding: px2rem(10);
      .shop_list{
        display: flex;
        align-items: center;
        height: px2rem(200);
        width: 100%;
        padding-left: px2rem(20);
        background: #ffffff;
        .info_photo{
          height: px2rem(160);
          width: px2rem(160);
          background: #d1d1d1;
        }
        .info{
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: px2rem(160);
          flex: 1;
          font-size: px2rem(34);
          padding-left: px2rem(20);
          background: #ffffffda;
        }
      }
    }
  }

  .summation{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: px2rem(88);
    background: #fff;
    position: absolute;
    bottom: 0;
    padding-left: px2rem(110);
    .price{
      font-size: px2rem(38);
    }
    .btn{
      background: red;
      border: none;
      width: px2rem(200);
      height: 100%;
      font-size: px2rem(40);
      color: #fff;
    }
  }
}
</style>
