1. 建立框架
   express -e (文件夹名称)

2. npm i 恢复依赖库
   
3.修改package.json中scripts启动的软件为nodemon

4.bin/www.js是主文件，所以给代码内容包在定义的db(()=>{})中
因为定义时参数要求是函数，所以要用一个箭头函数包着
这一步是目的是与mongoDB数据库建立连接

5.然后就是修改route中，请求和响应事件调用的数据来源（来自mongoDB）
