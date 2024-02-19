const mongoose = require('mongoose')
const db = require('./db/db')
const BookModel = require('./models/BookModel')


db(() => {
    BookModel.create({
        title: '西游记',
        time: new Date(),
        type: -1,
        account: 9.9,
        remarks: 'hehe'
    }).then((err, data) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(data)
    })
}
)

