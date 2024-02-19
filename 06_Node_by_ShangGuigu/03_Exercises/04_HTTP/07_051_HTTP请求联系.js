const http = require('http')

const server = http.createServer((request, response) => {

    const { method } = request
    const { pathname } = new URL(request.url, 'http://127.0.0.1')

    if (method === 'GET' & pathname === '/login') {
        response.end('login')
    }
    if (method === 'GET' & pathname === '/reg') {
        response.end('reg')
    }
    response.end('404')


});

server.listen(9000, () => {
    console.log('服务已经启动.. 端口 9000 监听中....');
})