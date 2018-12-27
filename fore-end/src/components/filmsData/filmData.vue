<template>
  <div class="film-detail">
    <!--后退 header-->
    <div class="film-header">
      <div class="goBack" @click="goBack">
        <i class="iconfont icon-arrow-right"></i>
      </div>
      <div class="title">{{ filmData.name }}</div>
    </div>
    <!-- 图片  -->
    <div class="film-poster">
      <img :src="filmData.poster">
    </div>
    <!-- 信息 -->
    <div class="film-detail">
      <div class="col">
        <div class="film-name">
          <span class="name">{{ filmData.name }}</span>
          <span class="item">{{ filmData.item && filmData.item.name }}</span>
        </div>
        <div class="film-grade">
          <span class="grade">{{filmData.grade}}</span>
          <span class="grade-text">分</span>
        </div>
      </div>

      <div class="film-category grey-text">{{ filmData.category }}</div>
      <div class="film-premiere-time grey-text">2018-12-07上映</div>
      <div class="film-nation-runtime grey-text">{{ filmData.nation }}  | {{ filmData.runtime }} 分钟</div>
      <div class="film-synopsis grey-text hide">{{ filmData.synopsis }}</div>
      <div class="toggle">
        <i class="iconfont icon-xiala"></i>
      </div>
    </div>
    <!-- 演员人员 -->
    <div class="actors">
      <div class="actors-title-bar">
        <span>演员人员</span>
      </div>
      <div class="row-scroll-wrapper actors-list">
        <ul class="list">
          <li class="item" v-for="(item,index) in filmData.actors" :key="index">
            <img :src="item.avatarAddress">
            <p>{{ item.name }}</p>
            <p>{{ item.role }}</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 剧照 -->
    <div class="photos">
      <div class="photos-title">
        <span class="photos-title-text">剧照</span>
        <span class="photos-to-all">全部<i class="iconfont icon-xiangyoujiantou"></i></span>
      </div>
      <div class="photos-item">
        <ul class="photos-list">
          <li class="photos-item-wrap" v-for="(item,index) in filmData.photos" :key="index">
            <img :src="item" alt="">
          </li>
        </ul>
      </div>
    </div>
    <!-- 购票按钮 -->
    <div class="goSchedule" @click="goPiao">
      选座购票
    </div>
  </div>
</template>

<script>
// 引入Axios请求
import Axios from 'axios'
/**
 * 在js部分 所有变量都是模块作用域
 * 如果需要使用就必须引入
 */
import { Toast } from 'mint-ui'

export default {
  name: 'filmData',
  data () {
    return {
      // 声明 filmDeta 空数据,后面获取数据赋值进来
      filmData: [],
      filmId: ''
    }
  },
  methods: {
    /**
     * 获取详情页数据
     */
    getfilmData () {
      Axios.get('/api/filmData/list', {
        params: {
        // get 请求的参数要放在这个里面传递
          id: this.filmId
        }
      }).then(response => {
        let result = response.data
        console.log(result)
        if (result.code === 0) {
          this.filmData = result.data.films[0]
          console.log(this.filmData)
        } else {
          alert(result.msg)
        }
      })
    },
    // 后退
    goBack () {
      this.$router.go(-1)
    },
    goPiao () {
      Toast({
        message: '功能暂未开放,请期待',
        iconClass: 'iconfont icon-tishi',
        className: 'mint_TS'
      })
    }
  },
  created () {
    this.filmId = this.$route.params.filmId
    console.log(this.filmId)
    this.getfilmData()
  }
}
</script>

<style lang="scss">
@import "@/styles/common/px2rem.scss";

.film-detail {
  flex: 1;
  overflow-y: auto;
  background: #f1f1f1;
  .film-header{
      position:absolute;
      height:px2rem(88);
      width: 100%;
      background: #ffffff00;
      position: fixed;
      z-index: 1;
      .goBack{
        position: absolute;
        top: px2rem(10);
        left: px2rem(10);
        width: px2rem(60);
        height: px2rem(60);
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        text-align: center;
        line-height: px2rem(60);
        i{
          font-size: px2rem(50);
        }
      }
      .title{
      text-align: center;
      line-height: px2rem(88);
      color: transparent;
      }
  }
  .film-poster {
    height: px2rem(360);
    img {
      width: 100%;
      height: 100%;
    }
  }

  .film-detail {
    height: px2rem(414);
    font-size: px2rem(26);
    padding: px2rem(30);
    padding-top: px2rem(24);
    background-color: #fff;
    position: relative;
    .col {
      height: px2rem(90);
      display: flex;
      align-items: center;
    }

    .film-name {
      flex: 1;
      display: flex;
      align-items: center;

      .name {
        color: #191a1b;
        font-size: px2rem(36);
        height: px2rem(48);
        line-height: px2rem(48);
        margin-right: px2rem(16);
      }

      .item {
        font-size: px2rem(24);
        color: #fff;
        background-color: #d2d6dc;
        height: px2rem(28);
        line-height: px2rem(28);
        padding: 0 px2rem(4);
        border-radius: px2rem(4);
        display: inline-block;
      }
    }

    .film-grade {
      flex-shrink: 0;
      width: px2rem(200);
      text-align: right;
      color: #ffb232;
      font-size: px2rem(24);

      .grade {
        font-size: px2rem(36);
        font-style: italic;
      }
    }

    .grey-text {
      font-size: px2rem(26);
      line-height: px2rem(40);
      color: #797d82;
      margin-top: px2rem(8);
    }

    .film-synopsis {
      margin-top: px2rem(16);
      overflow: hidden;
      &.hide {
        height: px2rem(80);
      }
    }

    .toggle {
      text-align: center;
      &.hide {
        i {
          transform: translate(180deg);
        }
      }
    }
  }

  .actors{
    width:100%;
    height:px2rem(384);
    margin-top: px2rem(20);
    background: #fff;
    .actors-title-bar{
      font-size:px2rem(34);
      height:px2rem(105);
      padding:px2rem(30);
    }
    .row-scroll-wrapper{
      height:px2rem(280);
      width: 100%;
      .list{
        height: 100%;
        display: flex;
        overflow-x: auto;
        overflow-y: hidden;
        padding-left: px2rem(30);
        .item{
          width: px2rem(170);
          margin-right: px2rem(20);
          font-size: px2rem(24);
          text-align: center;
          img{
            width: px2rem(170);
            height: px2rem(170);
            margin-bottom: px2rem(20);
          }
          p{
            line-height: px2rem(32);
          }
        }
      }
    }
  }

  .photos{
    width:100%;
    height:px2rem(384);
    margin-top: px2rem(20);
    margin-bottom: px2rem(120);
    background: #fff;
    .photos-title{
      height:px2rem(105);
      padding:px2rem(30);
      display: flex;
      justify-content: space-between;
      font-size:px2rem(34);
      .photos-to-all{
        font-size:px2rem(28);
        color: #575757;
        i{
          font-size:px2rem(28);
        }
      }
    }

    .photos-item{
      height:px2rem(280);
      width: 100%;
      .photos-list{
        height: 100%;
        display: flex;
        overflow-x: auto;
        overflow-y: hidden;
        padding-left: px2rem(30);
        .photos-item-wrap{
          margin-right: px2rem(20);
          img{
            width: px2rem(300);
          }
        }
      }
    }
  }

  .goSchedule{
      position: fixed;
      bottom: 0;
      left: 0;
      height: px2rem(98);
      width: 100%;
      text-align: center;
      background-color: #ff5f16;
      color: #fff;
      font-size: px2rem(32);
      line-height: px2rem(98);
  }
}
// Toast 组件引入
.mint_TS{
    font-size:px2rem(98);
  }

</style>
