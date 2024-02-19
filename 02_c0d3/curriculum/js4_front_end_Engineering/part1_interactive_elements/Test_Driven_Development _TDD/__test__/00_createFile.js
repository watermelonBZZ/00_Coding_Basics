const fs = require('fs')

fs.writeFile('./01_lib.test.js', `const name = require('../')`, () => { console.log('success'); })