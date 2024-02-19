const fs = require("fs")

const data = fs.readdirSync(__dirname + '/031_重命名练习')


data.forEach(item => {
    const fileName = item.split('-')
    let [num, name] = fileName
    // console.log([num, name])

    if (Number(num) < 10) {
        num = '0' + num
    }

    const newName = num + '-' + name

    // console.log(newName)
    fs.renameSync(__dirname + '/031_重命名练习/' + item, __dirname + '/031_重命名练习/' + newName)

});

