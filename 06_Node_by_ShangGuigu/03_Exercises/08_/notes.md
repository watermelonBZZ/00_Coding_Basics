1. 如何利用express generator快速建立框架
2. 修改启动应用
3. css，js等外部参照放在public下，并用绝对路径

4. 如何获取表单数据
 4.2 method，action = ‘/url’
 4.1 给html元素添加name属性
 4.3 调用req.body 
    因为app.js 里面 有 .use(express.urlencoded({ extended: false }))
    是一个全局middleware，每一个req都会添加一个body属性，里面有是name和value的键值对

5.lowdb
        将来用的不多，了解一下
    5.1 安装1.0.0版本
        npm i lowdb@1.0.0
    5.2 初始化
        const low = require('lowdb')
        const FileSync = require('lowdb/adapters/FileSync')
        
        //这个路径根据需要修改成db.json文件的所在路径
        const adapter = new FileSync('db.json')
        （const FileSync = require(__dirname + '../data/db.json')）

        const db = low(adapter)
        //初始化数据
        // db.defaults({ posts: [], user: [] }).write()

        //写入数据// db.get('posts').push({id: 2，title:今天天气还不错~~'}).write()
        // db.get('posts').unshift({id: 3，title:今天天气还不错~~'}).write()

        //获取
        let res = db.get('posts') .find({id: 1}) .value();
        console.log(res);

        //获取数据
        // console.log(db.get( 'posts ').value());
        //删除数据
        let res = db.get('posts').remove({id: 3}).write();
        console.log(res) // 返回被删除的对象，类似于pop

        //更新数据
        // db.get('posts').find({id: 1}).assign({title:今天下雨啦!!!}).write()

    5.3 添加id
        npm i shortid
        导入
        使用
        let id = shortid.generate()
        把id添加到req.body中
        {id:id, ...req.body}


