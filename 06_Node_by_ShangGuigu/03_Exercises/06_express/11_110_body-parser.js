
const bodyParser = require('body-parser')
const express = require('express');

//创建应用对象
const app = express();

//申明body-parser中间路由
const urlParser = bodyParser.urlencoded({ extended: false });

//创建路由
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/02_097_form.html')
});


//后台
app.post('/login', urlParser, (req, res) => {
    console.log(req.body);
    res.send('login');
});



//监听端口, 启动服务
app.listen(3000, () => {
    console.log('服务已经启动, 端口 3000 正在监听中....')
})