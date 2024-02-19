1.basic
    1.1 整体思路：
        连接
        schema
        model(类似创建js的类)

        这里用async function，创建对象
        （因为是一个promise对象（因为储存对象不一定是立刻完成。））
        
        储存.save()

    注意：
        尚硅谷和mosh有两个明显区别：
            1.mosh用了promise句法，符合mongoose新版句法要求
            2.mosh的文档创建是用new从model新建一个，尚硅谷直接用model的结果对象直接调用.create()

2.module
    2.1 整体思路：
        a.mongodb的连接、事件绑定导出模块(可重复调用)
        b.model定义数据库中文档的类型.Schema(), .model()
        c.在一个index文件中，调用类mongodb、model模块的create方法

    2.2 config文件
        a.配置文件内容
        module.exports = {
        DBHOST: '127.0.0.1',
        DBPORT: 27017,
        DBNAME: 'bilibili'
        }

        b.index中调用
          const {DBHOST, DBPORT, DBNAME} = require('../config/config.js');

3. 案例优化
    3.1 导入封装的db函数，并把www文件内容作为第一个参数传入db()，作用是在成功连接服务器之后，启动html界面和相关第三方库

    3.2 创建Schema类型、创建model对象、导出模块

    3.3 把对象导入router中，并在post事件中调用
    （就是在制定路径上的post添加事件发生时，会调用3.2中创建的model对象的create方法在数据库中添加数据）

    3.4 删除事件，并新增confirm判断

    3.5 添加添加账单的btm