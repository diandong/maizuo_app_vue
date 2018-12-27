var express = require('express');
var app = express();

// 引入路由模块
var FilmRouter = require('./routes/film.js');
var CinemaRouter = require('./routes/cinema.js')
var DataRouter = require('./routes/filmData.js')
var ShopList = require('./routes/shopList.js')

// 使用路由模块，中间件
app.use('/api/film/', FilmRouter); // 影票页
app.use('/api/cinemas/', CinemaRouter); // 影院页
app.use('/api/filmData/', DataRouter); // 影票详情页
app.use('/api/shopList/',ShopList); // 商品列表



app.listen(3000);
console.log('服务启动成功');
