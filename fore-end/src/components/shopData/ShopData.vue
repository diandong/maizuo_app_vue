<template>
  <div class="shopData">
    <!--后退 header-->
    <div class="shop-header">
      <div class="goBack" @click="goBack">
        <i class="iconfont icon-arrow-right"></i>
      </div>
      <div class="title">{{ shopData.name }}</div>
      <!-- shopCart -->
      <div class="shopCart" @click="goCart">
        <i class="iconfont icon-gouwuche1"></i>
        <span>{{ cartNum }}</span>
      </div>
    </div>
    <!-- banner -->
    <div class="banner">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="https://mall.s.maizuo.com/25fcc7b0d440fdb6ac913c7dc1f6524f.png?x-oss-process=image/quality,Q_70" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="https://mall.s.maizuo.com/db27c2d7d7ff7c4e016b9c8c16bcb021.jpg?x-oss-process=image/quality,Q_70" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="https://mall.s.maizuo.com/0b28458c381d1a11c4381b883f7f1e9c.jpg?x-oss-process=image/quality,Q_70" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- product -->
    <div class="product">
      <!-- 价格区域 -->
      <div class="product_title">
        <h1>{{ product }}</h1>
        <div class="product_price">
          <p><span>市场价: <s>$29.9</s></span><span>抢购价: <b class="price">${{ price }}</b></span></p>
          <div class="number">购买数量：<span @click="substract">-</span><span>{{ num }}</span><span @click="add">+</span></div>
          <div class="btn">
            <mt-button type="primary">立即购买</mt-button>
            <mt-button type="danger" @click="addCart">加入购物车</mt-button>
          </div>
        </div>
      </div>
      <!-- 飞入动画 -->
      <transition name="ball" @after-enter="afterEenter">
        <div class="ball" v-if="isShow"></div>
      </transition>
      <!-- 信息参数 -->
      <div class="product_info">
        <ul>
          <li>商品参数</li>
          <li>商品货号: {{ id }}</li>
          <li>库存情况：{{ kucun }} 件</li>
          <li>上架时间：{{ time }}</li>
        </ul>
      </div>
      <!-- 图文介绍 -->
      <div class="Photo_show">
        <div class="show_titel">- 商品详情 -</div>
        <div class="Photo">
          <img src="https://mall.s.maizuo.com/0ddad2d5fe96c7906485914e0fd42f0c.jpg" alt="">
          <img src="https://mall.s.maizuo.com/8917b9e6222c1a361aeab776242655d8.jpg" alt="">
          <img src="https://mall.s.maizuo.com/110a1bf3fa2e56806ff58de2aeada4ef.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入Axios请求
import Axios from 'axios'
// import { mapMutations } from 'vuex'

export default {
  name: 'shopData',
  data () {
    return {
      isShow: false, // 控制小球是否显示
      shopData: [],
      price: 19.9,
      num: 1, // 商品数量
      kucun: 100,
      product: '一亩塘 玫瑰花蕾茶 50g',
      id: 'SD123127412414',
      time: '2018-10-18'
    }
  },
  computed: {
    cartNum () {
      return this.$store.state.cartNum
    }
  },
  methods: {
    // ...mapMutations([
    // ]),
    goCart () {
      this.$router.push('/shopCart')
    },
    // 后退
    goBack () {
      this.$router.go(-1)
    },
    getshopData () {
      Axios.get('api/shopData/list', {
        params: {
          // gei 请求的参数放在这里面
          // id: this.id
        }
      }).then(response => {
        let result = response.data
        console.log(result)
        if (result.status === 0) {
          this.shopData = result.data[0]
        }
      })
    },
    add () {
      if (this.num >= this.kucun) return
      this.num++
    },
    substract () {
      if (this.num <= 1) return
      this.num--
    },
    addCart () {
      this.isShow = true
      if (this.isShow) {
        this.$store.commit('addShop', {
          id: this.id,
          product: this.product,
          price: this.price,
          num: this.num
        })
      }
      // 让小球飞起来，也就是插入ball这个元素
    },
    // 处理过渡效果进入之后的行为
    afterEenter () {
      this.isShow = false// 移除元素
    }
  },
  created () {
    this.filmId = this.$route.params.id
    // this.getshopData()
  }
}
</script>

<style lang="scss">
@import "@/styles/common/px2rem.scss";
.ball-enter-active{
    animation: bounce-in .5s;
}

  @keyframes bounce-in {
    0% {
        transform: translate3d(0, 0, 0);
    }
    15% {
        /*x,y,z轴的位置*/
        transform: translate3d(-80px, -120px, 0);
    }
    30% {
        /*x,y,z轴的位置*/
        transform: translate3d(-150px, -240px, 0);
    }
    45% {
        transform: translate3d(-160px, -340px, 0);
    }
    60% {
        transform: translate3d(-160px, -440px, 0);
    }
    75% {
        transform: translate3d(-100px, -560px, 0);
    }
    90% {
        transform: translate3d(0px, -690px, 0);
    }
    100% {
        transform: translate3d(215px, -830px, 0);
    }
}
.shopData {
  flex: 1;
  overflow-y: auto;
  background: #f1f1f1;
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
      color: transparent;
    }
    .shopCart{
      position: fixed;
      right: px2rem(20);
      top:px2rem(6) ;
      // bottom: px2rem(30);
      width: px2rem(90);
      height: px2rem(90);
      border-radius: px2rem(4);
      // border:px2rem(4) solid #00000009;
      // background: #ffffff;
      text-align: center;
      i{
        line-height: px2rem(90);
        font-size:px2rem(50);
        color:#797d82;
      }
      span{
        position: absolute;
        left: 50%;
        margin-left: px2rem(-15);
        width: px2rem(34);
        height: px2rem(34);
        line-height: px2rem(34);
        border-radius: 50%;
        font-size:px2rem(24);
        color:#ffffff;
        background:#ff5f16;
      }
    }
  }

  .banner{
    height: px2rem(500);
    margin-bottom: px2rem(4);
  }

  .product{
    display: flex;
    flex-direction: column;
    position: relative;
    .product_title{
      width:100%;
      height: px2rem(340);
      background: #fff;
      padding-left: px2rem(20);
      margin-bottom: px2rem(10);
      h1{
        text-align: center;
        font-size: px2rem(40);
        line-height: px2rem(80);
        border-bottom: px2rem(2) solid #f1f1f1;
      }
      .product_price{
        padding: px2rem(15);
        p{
          font-size: px2rem(30);
          display: flex;
          line-height: px2rem(90);
          color: #363636;
          span{
            margin-right: px2rem(80);
          }
          .price{
            font-size: px2rem(40);
            text-align: right;
            color: #ff0000;
          }
        }
        .number{
          font-size: px2rem(30);
          height: px2rem(60);
          span{
            line-height: px2rem(40);
            text-align: center;
            display: inline-block;
            border: 2px solid rgba(0, 0, 0, 0.1);
            width: 35px;
          }
        }
        .btn{
          button{
            width: px2rem(200);
            height: px2rem(60);
            font-size: px2rem(34);
          }
        }
      }
    }
    .ball {
      border-radius: 50%;
      background-color: red;
      width: 24px;
      height: 24px;
      position: absolute;
      top: 270px;
      left: 350px;
      display: inline-block;
      z-index: 9999;
    }
    .product_info{
      width:100%;
      height: px2rem(260);
      background: #fff;
      padding-left: px2rem(20);
      margin-bottom: px2rem(10);
      font-size: px2rem(32);
      line-height: px2rem(50);
      ul{
        padding: px2rem(15);
      }
    }

    .Photo_show{
      width:100%;
      height: 100%;
      background: #fff;
      padding: px2rem(10);
      margin-bottom: px2rem(10);
      font-size: px2rem(32);
      .show_titel{
        line-height: px2rem(100);
        text-align: center;
      }
      .Photo{
        img{
          width: px2rem(620);
        }
      }
    }
  }
}
</style>
