const express = require('express')
const { singers } = require('./05_101_singers.json')

// console.log(singers);


const app = express()

app.get('/:id.html', (req, res) => {
    const id = req.params.id
    const result = singers.find((item) => {
        if (item.id === Number(id)) return true
    })

    if (!result) {
        res.statusCode = 404
        res.end('not found111')
        return
    }

    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>${result.singer_name}</h1>
        <img src="${result.singer_pic}" alt="">
    </body>
    </html>`)


})

app.listen(3000, () => {
    console.log('start');
})