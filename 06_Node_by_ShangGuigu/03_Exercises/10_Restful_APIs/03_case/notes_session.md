1. 建立框架
   express -e (文件夹名称)

2. npm i 恢复依赖库
   
3.修改package.json中scripts启动的软件为nodemon

4.bin/www.js是主文件，所以给代码内容包在定义的db(()=>{})中
因为定义时参数要求是函数，所以要用一个箭头函数包着
这一步是目的是与mongoDB数据库建立连接

5.然后就是修改route中，请求和响应事件调用的数据来源（来自mongoDB）


session-----------------------
写注册页面
1. 初始化，建立新的页面
   1.1 新建route 'auth'，设立event，跳转相关注册页面ejs
   1.2 require导入app中，调用use
   

2. 注册界面
   2.1 设立注册页面的input的name，便于body-parser在req建立body对象(这个name的value要和Model原型中的key是对应一致的)
   2.2 action，method修改
   2.4 建立新的Model原型，用于在数据库中建立post 请求中的数据
   2.3 在route 'auth'中导入Model，并在对用的post event下调用create方法
   2.4 create 中用md5加密密码

3.登录界面
   3.1 用户名储存的model 用findOne找登录请求req.body中的账号、密码是否正确，对应不同的页面

   3.2 登录成功之后，添加session步骤如下
      3.2.1 安装session 和 conncet mongo
      3.2.2 在app.js中导入（他们都是中间件）
      3.2.3 设置session（这个比较特殊，可以copy，且要放在app.js文件的.use(auth.js)之前，不然会出现数据undefine的情况）
         但是注意数据库连接用变量比较好MongoStore.create({
         mongoUrl: `mongodb://${DBHOST}:${DBPORT}/${DBNAME}` //数据库的连接配置
         })


         因为post请求之后，代码会按顺序run一下全局的middleWare，所以要先经过session的middleWare，再跑authRouter，跑对应请求方法和url的函数（post里面储存起来）
      3.2.4在route规则里写req.session.Key = data.Value
      (会在前面设置的数据库中添加一个session collection（感觉SessionModel这部被封装好了，不用自己写）)

   3.3 登录检测（建立一个middleWare检测是否有session，只有注册在数据库且登录后添加session的才能通过）

   3.4 退出功能
      bootsrap写的一个按钮
      然后给<a>元素，href是/logout 地址
      注意要用post，避免外站攻击

   4. 配置404
      4.1 写一个404的ejs，给app.js调用
      4.2 公益404
         <script src="//volunteer.cdn-go.cn/404/latest/404.js"></script>


token-----------------------

1. 总体思路
   1.1. 安装、导入require

   1.2. 登录成功后（login），创建token，
      
   1.3. 下次发送请求时，校验token

2. 案例（在记账本中api请求route中添加token校验）

   2.1 添加新的路由规则（）

   Notes: 这里响应没有用res.send(), 
   而是用了res.json。json的特点：
   This method automatically sets the Content-Type header to application/json and sends the JSON response to the client. It's a convenient way to send structured data in JSON format from the server to the client.

   2.2 添加token创建语句
      const jwt = require('jsonwebtoken');

      const token = jwt.sign({ foo: 'bar' }/数据, 'shhhhh'/);  
      句法说明
      jwt.sign(payload, secretOrPrivateKey, [options, callback])

   2.3 校验token
      .verify(token, secretOrPrivateKey, callback)
      不能使用promise语法

      一般返回的token会储存在req的Headers里面, 使用req.get('keyName')获取
      (这里是在apiPost中手动给header加了一个token，然后发送请求校验)

      并且给req添加一个用户信息属性
      req.user = data 

3. 修改域名
   编辑文件 C:\Windows\System32\drivers\etc\hosts
   如果修改失败， 可以修改该文件的权限