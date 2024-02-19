const fs = require("fs")

// 创建文件
fs.writeFile(__dirname + '/031_重命名联系.js', 'const fs = require("fs")',
    (err) => {
        if (err) {
            return console.log('创建失败')
        }
    })

//移动与重命名
// fs.rename('./oldName', 'targetName',
//     (err) => {
//         if (err) {
//             return console.log('移动失败')
//         }
//     })

//创建文件夹
// fs.mkdir('./test', (err) => {
//     if (err) {
//         return console.log('创建失败')
//     }
// })

//创建递归文件夹
// fs.mkdir('./a/b/c', { recursive: true }, (err) => {
//     if (err) {
//         return console.log('创建失败')
//     }
// })



//删除文件夹和文件
//当时test文件夹是空的，但最好带着recursive,不然会失败
//文件不需要recursive
// fs.rm('./test', { recursive: true }, (err) => {
//     if (err) {
//         return console.log('删除失败')
//     }
// })

// 删除递归文件夹，路径只要最外层的parent
// fs.rm('./a', { recursive: true }, (err) => {
//     if (err) {
//         return console.log('创建失败')
//     }
// })

//读取文件夹
// fs.readdir('./', (err, data) => {
//     if (err) {
//         return ('错误')
//     } console.log(data)
// })

//读取文件状态
// fs.stat('./024_复制文件.js', (err, data) => {
//     if (err) {
//         return console.log('错误')
//     } return console.log(data)
// })