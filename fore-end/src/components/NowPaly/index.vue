<template>
  <!-- movieList -->
  <div class="movieBox">
    <ul class="list">
      <li class="item" v-for="(item, index) in films" :key="index" @click="goData(item.filmId)">
        <a class="Alist" href="javascript:;">
          <div class="item_img">
            <img :src="item.poster">
          </div>
          <div class="media">
            <h2>
              {{ item.name }}
              <span class="BQ">{{ item.filmType.name }}</span>
            </h2>
            <p>
              观众评分
              <span class="PF">{{ item.grade }}</span>
            </p>
            <!-- 传个 actorsList 方法,返回主演数据 -->
            <p class="mui-ellipsis">主演 : {{ actorsList(item.actors) }}</p>
            <p class="mui-ellipsis">{{ item.nation }} | {{ item.runtime }}分钟</p>
          </div>
          <button id="shop" type="button">购票</button>
        </a>
      </li>
    </ul>
    <!-- 加载更多按钮 -->
    <div class="load-more" @click="loadMore">{{ loadMoreText }}</div>
  </div>
</template>

<script>
// 引入Axios请求
import Axios from 'axios'

export default {
  name: 'NowPlay',

  data () {
    return {
      // 声明films空数据,后面获取films数据赋值进来
      films: [],
      loadMoreText: '下一页',
      pageNum: 1, // 每页页码
      pageSize: 6, // 每页条数
      totalPage: 0 // 总页数
    }
  },
  methods: {
    /**
     * 获取影片数据
     */
    getFilms () {
      Axios.get('/api/film/list', {
        params: {
          // get 请求的参数要放在这个里面传递,预约电影添加 type: 2
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }
      }).then(res => {
        // response 不单单包含请求的json后台数据,走data里面拿出数据
        let result = res.data
        console.log(result)

        // 一共多少页 = 总数量(响应体的total数量) / 每页条数
        this.totalPage = Math.ceil(result.data.total / this.pageSize)

        // 判断是否显示下一页还有数据,改变按钮文字 (当前页码数 和 总页码 对比来判断)
        if (this.pageNum >= this.totalPage) {
          this.loadMoreText = '没有了'
        }
        // 根据 json 数据里面传过来的 status 状态码,判断成功是否
        // 服务器的数据 result.code 是根据服务器的数据里面的 code 状态码来判断
        if (result.code === 0) {
          // 点击下一页,需要追加数组数据,使用合拼数组 concat() 方法 或者用扩展运算符'...'
          // this.films = result.data.films
          // this.films = this.films.push(...result.data.films)
          this.films = this.films.concat(result.data.films)
        } else {
          alert(result.msg)
        }
      })
    },
    /**
     * 排列我们主演列表
     * {{ actorsList(item.actors) }}
     * arr [{'name':'城建斌'},{'name':'城建斌'},{'name':'城建斌'}]
     * map() 方法返回一个新数组
     * @param {Array} list 主演列表
     */
    actorsList (list) {
      // console.log(list)
      let arr = []
      // 判断列表是否为空,为空是不能使用数组 map 方法
      if (list) {
        arr = list.map(item => {
          return item.name
        })
      }
      return arr.join(' ')
    },
    /**
     * 加载下一页
     */
    loadMore () {
      // 需要判断不同按钮的 点击状态,超过总页码不执行请求
      if (this.pageNum < this.totalPage) {
        // 对当前页码加1
        this.pageNum++
        this.getFilms()
      }
    },
    /**
     * 点击到详情
     * @param {String} id 影票Id
     */
    goData (id) {
      this.$router.push({
        name: 'filmData',
        params: {
          filmId: id
        }
      })
    }
  },
  created () {
    this.getFilms()
  }
}
</script>

<style lang="scss">
@import "@/styles/common/px2rem.scss";

.movieBox {
  flex: 1;
  .list {
    display: flex;
    flex-direction: column;
    margin-left: px2rem(30);

    .item {
      position: relative;
    }

    .item::after {
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

    .Alist {
      padding: px2rem(30) px2rem(30) px2rem(30) 0;
      display: flex;
      align-items: center;

      .item_img {
        width: px2rem(132);
        height: px2rem(180);

        img {
          width: 100%;
          height: 100%;
        }
      }

      .media {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: px2rem(308);
        height: px2rem(162);
        margin: 0 px2rem(20);

        h2 {
          font-size: px2rem(34);
          font-weight: normal;
          line-height: px2rem(34);
          color: #000;

          .BQ {
            display: inline-block;
            width: px2rem(40);
            height: px2rem(28);
            background: #ccc;
            font-size: px2rem(24);
            text-align: center;
            line-height: px2rem(28);
            border-radius: px2rem(4);
            margin: 0 0 px2rem(4) px2rem(6);
            vertical-align: middle;
            color: #fff;
          }
        }

        p {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: px2rem(26);
        }

        .PF {
          font-size: px2rem(28);
          color: #ff5f16;
          margin-left: px2rem(8);
        }
      }

      #shop {
        width: px2rem(100);
        height: px2rem(50);
        border: px2rem(1) solid red;
        background: none;
        border-radius: px2rem(4);
        font-size: px2rem(26);
        color: #ff5f16;
      }
    }
  }
  .load-more{
    font-size: px2rem(32);
    height: px2rem(60);
    line-height: px2rem(60);
    text-align: center;
  }
}
</style>
