const allFuns = {}


const fs = require('fs')

const request = new Request('https://pokeapi.co/api/v2/pokemon/')


const writeName = async () => {
    // console.log('success setup');
    const response = await fetch(request) //这里返回的是一个Response object对象
    const data = await response.json() //一般数据在json这个function里
    // 不可写await response.json().results，因为异步处理会先执行results是个undefined
    const results = data.results //一般数据在json这个function里


    const nameArray = results.reduce((acc, e) => {
        return acc + `<h1>${e.name}</h1>`
    }, '')

    fs.writeFile('names.html', nameArray, () => { console.log('success'); })
}

writeName()


allFuns.writeName = writeName
module.exports = allFuns