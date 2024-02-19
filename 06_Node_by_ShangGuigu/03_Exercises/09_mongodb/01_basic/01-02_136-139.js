const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/bilibili')

mongoose.connection.on('open', () => {
    console.log('success')

    //设置文档原型Shcema
    const BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    })

    //以文档原型创建实例对象.model('name', Schema)
    const BookModel = mongoose.model('book', BookSchema)

    //在文档中创建文档数据
    BookModel.create({
        name: '西游记',
        author: '吴承恩',
        price: 19.9
    }).then((err, data) => {
        if (err) {
            console.log(err)
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