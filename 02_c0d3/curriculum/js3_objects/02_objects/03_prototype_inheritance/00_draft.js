const request = require('request')
const fs = require('fs')

request('https://www.c0d3.com/api/lessons', (err, res, data) => {
    //console.log(data)  data is a string of HTML tags
    // console.log(typeof data)
    const reveivedData = JSON.parse(data)

    const titleArray = reveivedData.map(thisLesson => {
        return thisLesson.title
    })// return to a new array [a,b...]

    const title = titleArray.reduce((acc, e) => {
        return `${acc}<h1>${e}</h1>`
    }, '')// return to acc that is a string

    fs.writeFile('./lessons.html', title, () => { return console.log('success') })

})