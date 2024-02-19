
const express = require('express');
const { url } = require('inspector');

//创建应用对象
const app = express();

// function fangDap(req, res, next) {
//     next()
// }
// app.use()

app.use((req, res, next) => {
    const referer = req.get('referer')
    console.log(referer);
    if (referer) {
        const url = new URL(referer)
        const hostname = url.hostname

        if (hostname !== '127.0.0.1') {
            res.status(404).send('Not Found')
            return
        }

    }
    next()
})

app.use(express.static(__dirname + '/public'))



//创建路由
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/02_097_form.html')
// });


//监听端口, 启动服务
app.listen(3000, () => {
    console.log('服务已经启动, 端口 3000 正在监听中....')
})