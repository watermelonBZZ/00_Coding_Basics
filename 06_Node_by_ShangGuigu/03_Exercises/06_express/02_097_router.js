const express = require('express')

const app = express()

app.get('/home', (req, res) => {
    res.end('home home')
})

app.get('/', (req, res) => {
    res.end('home//')
})

app.post('/login', (req, res) => {
    res.end('login page')
})

app.all('/login', (req, res) => {
    res.end('login page all')
})

app.all('*', (req, res) => {
    res.end('404 not found')
})

app.listen(3000, () => {
    console.log('start');
})