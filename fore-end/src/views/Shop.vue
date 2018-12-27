<template>
  <div class="shopList">
    <!-- header -->
    <header class="header">
      <div class="left" @click="goBack">
          <i class="iconfont icon-arrow-right"></i>
      </div>
      <div class="title">
        <div>商品列表</div>
      </div>
      <div class="right">
        <div>
          <i class="iconfont icon-sousuo"></i>
        </div>
      </div>
    </header>
    <!-- list -->
    <div class="goods">
      <ul class="goods_list">
        <li class="goods_item" v-for="(item, index) in shopData" :key="index">
          <router-link :to="{ path: '/shop/' + item.id  }">
          <!-- <router-link :to="{item.id}"> -->
            <img :src="item.poster" alt="">
            <div class="title">{{ item.title }}</div>
            <div class="desc">
              <div class="sell">
                <span>￥{{item.sell_price}}</span>
                <s>￥{{item.market_price}}</s>
              </div>
              <div class="detail">
                <div class="hot">
                    热卖中
                </div>
                <div class="count">
                    剩{{item.stock_quantity}}件
                </div>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- shopCart -->
    <div class="shopCart" @click="goCart">
      <i class="iconfont icon-gouwuche1"></i>
      <span>{{cartNum}}</span>
    </div>
  </div>
</template>

<script>
// 引入Axios请求
import Axios from 'axios'

export default {
  name: 'Shop',
  data () {
    return {
      shopData: []
    }
  },
  computed: {
    cartNum () {
      return this.$store.state.cartNum
    }
  },
  methods: {
    goCart () {
      this.$router.push('/shopCart')
    },
    /**
     * 获取商品页数据
     */
    getshopData () {
      Axios.get('/api/shopList/list', {
        params: {
        // get 请求的参数要放在这个里面传递
          // id: this.id
        }
      }).then(response => {
        let result = response.data
        console.log(result)
        if (result.status === 0) {
          this.shopData = result.data
          // this.shopData = this.films.concat(result.data.films)
          console.log(this.shopData)
        } else {
          // alert(result.msg)
        }
      })
    },
    // 后退
    goBack () {
      this.$router.go(-1)
    }
    /**
     * 点击到详情
     * @param {String} id 影票Id
     */
    // goData (id) {
    //   this.$router.push({
    //     name: 'filmData',
    //     params: {
    //       filmId: id
    //     }
    //   })
    // }
  },
  created () {
    this.getshopData()
  }
}
</script>

<style lang="scss">
// @import '../styles/common/px2rem'; @ = src 路径
@import "@/styles/common/px2rem.scss";
.shopList {
  flex: 1;
  overflow-y: auto;
  background: #f1f1f1;

  .header {
    display: flex;
    position: relative;
    top: 0;
    width: 100%;
    height: px2rem(88);
    font-size: px2rem(26);
    text-align: center;
    line-height: px2rem(88);
    background: #ffffff;

    .left {
      margin-left: px2rem(20);
      width: px2rem(96);
      height: px2rem(88);
      i {
        font-size: px2rem(50);
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

  .goods{
    display: flex;
    flex-direction: column;
    .goods_list{
      display: flex;
      padding: px2rem(10);
      flex-wrap:wrap;
      .goods_item{
        width: px2rem(292);
        height: px2rem(400);
        padding: px2rem(10);
        margin: px2rem(8);
        text-align: center;
        font-size: px2rem(24);
        background: #fff;
        display: flex;
        flex-direction: column;
        img{
          width:100%;
          height:px2rem(260);
          margin-bottom: px2rem(10);
        }
        .title{
          font-size: px2rem(28);
          line-height: px2rem(40);
          background: #f1f1f1;
          color: #000000;
        }
        .desc{
          display: flex;
          width: 100%;
          height:px2rem(80);
          justify-items: center;
          align-items: center;
          .sell{
            flex: 1;
            span{
              font-size: px2rem(34);
              display: inline-block;
              color:red;
              margin-bottom: px2rem(6);
            }
            s{
              color: #00000081;
            }
          }
          .detail{
            flex: 1;
            .hot{
              color:red;
              font-size: px2rem(26);
              margin-bottom: px2rem(8);
            }
            .count{
              color: #525252;
            }
          }
        }
      }
    }
  }

  .shopCart{
    position: fixed;
    right: px2rem(30);
    bottom: px2rem(30);
    width: px2rem(90);
    height: px2rem(90);
    border-radius: 50%;
    border:px2rem(4) solid #0000001f;
    background: #ffffff;
    text-align: center;
    i{
      line-height: px2rem(90);
      font-size:px2rem(70);
      color:#a7a7a7;
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
</style>
