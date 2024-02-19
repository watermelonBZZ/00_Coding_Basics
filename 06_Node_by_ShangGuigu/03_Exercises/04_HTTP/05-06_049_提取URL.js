const http = require('http')


const server = http.createServer((request, response) => {

    let res = url.parse(request.url, true)
    console.log(res.query.a, res.query.c)

    response.end('url')
});

//3. 监听端口, 启动服务
server.listen(9000, () => {
    console.log('服务已经启动....')
});