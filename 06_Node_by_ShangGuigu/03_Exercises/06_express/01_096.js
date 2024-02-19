const express = require('express')

const app = express()

app.get('/home', (req, res) => {
    res.end('success!');
})

app.listen('3000', () => {
    console.log('started');
})