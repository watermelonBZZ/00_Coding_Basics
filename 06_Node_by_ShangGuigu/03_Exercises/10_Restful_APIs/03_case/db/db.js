const mongoose = require('mongoose')
const config = require('../config/config.js')

//设置 strictQuery 为 true
mongoose.set('strictQuery', true);

function db(success, error) {

    if (typeof error !== 'function') {
        error = function (err) {
            console.log('失败', err)
        }
    }

    // connect
    mongoose.connect(`mongodb://${config.DBHOST}:${config.DBPORT}/${config.DBNAME}`)

    // event handle
    mongoose.connection.once('open', () => {
        success();
    });

    // 设置连接错误的回调
    mongoose.connection.on('error', (err) => {
        error(err);
    });

    //设置连接关闭的回调
    mongoose.connection.on('close', () => {
        console.log('连接关闭');
    });

}
// 导出
module.exports = db