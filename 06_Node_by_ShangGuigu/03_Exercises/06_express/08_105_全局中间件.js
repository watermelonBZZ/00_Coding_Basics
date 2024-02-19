/**
 * 记录每个请求的 url 与 IP 地址
 */
//导入 express
const express = require('express');
const fs = require('fs');
const path = require('path');

//创建应用对象
const app = express();

//middleWare
function recordMiddleware(req, res, next) {
  const { url, ip } = req
  fs.appendFileSync(path.resolve(__dirname + '/08_105_access.log'), `${url} ${ip}\r\n`)
  next()
}

app.use(recordMiddleware);

//创建路由
app.get('/home', (req, res) => {
  res.send('前台首页');
});

app.get('/admin', (req, res) => {
  res.send('后台首页');
});

app.all('*', (req, res) => {
  res.send('<h1>404 Not Found</h1>')
})

//监听端口, 启动服务
app.listen(3000, () => {
  console.log('服务已经启动, 端口 3000 正在监听中....')
})

