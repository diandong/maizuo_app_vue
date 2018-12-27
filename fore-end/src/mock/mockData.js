// 引入 mockjs
import Mock from 'mockjs'
// 拦截 /static/api/homepage.json 这个请求
// 第一个参数要拦截的请求地址,第二参数返回的参数规则
Mock.mock('/api/shopList/list', {
  'status|1': [0, 0],
  'msg': function () {
    if (this.status === 0) {
      return '成功'
    } else {
      return '网络异常，请稍候重试！'
    }
  },
  'data|10-50': [{
    'id|1-1000': 1,
    'title': '@ctitle()',
    'add_time': '@now()',
    'zhaiyao': '@csentence()',
    'poster': Mock.Random.dataImage('218x300', 'Hello Mock.js!'),
    'sell_price|1500-3000': 1500,
    'market_price|1500-3000': 1500,
    'stock_quantity|30-100': 20,
    'img': Mock.Random.image('640x360', '#4A7BF7', 'Hello'),
    'goods_no|100-1000': 1
  }]

})
