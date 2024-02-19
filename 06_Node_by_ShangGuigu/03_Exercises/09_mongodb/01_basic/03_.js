const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/bilibili')

mongoose.connection.on('open', () => {
    console.log('success')

    //设置文档原型Shcema
    //如果属性输入错误，会被忽略，但后面的继续添加
    //验证数据
    const BookSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            unique: true //unique 需要重建集合才能有效果，就是可能要删除当前集合，重新建立
        },
        author: {
            type: String,
            default: '匿名'
        },
        style: {
            type: String,
            enum: ['1', '2', '3']
        },
        price: Number
    })

    //以文档原型创建实例对象.model('name', Schema)
    const BookModel = mongoose.model('book', BookSchema)

    //在文档中创建文档数据
    BookModel.create({
        // name: '西游记',
        author: '吴承恩',
        price: 19.9
    }).then((err, data) => {
        if (err) {
            console.log('失败')
            return
        }
        console.log(data)

    })
})
mongoose.connection.on('error', () => {
    console.log('error')
})
mongoose.connection.on('close', () => {
    console.log('close')
})

//翻译一下就是创建一个集合，集合内包含每个文档包含三个值
//注意，mongoose从6.0.0开始，create不再接收一个回调作为参数，而是会返回一个promise对象
//因为create函数改了，需要结束后加.than((err,data)=>)