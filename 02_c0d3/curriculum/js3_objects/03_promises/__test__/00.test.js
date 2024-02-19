// const fn = require('../filename'); //check

const fs = require('fs')

fs.writeFile('./03.test.js', `const fn = require('../03.js'); //check`, () => { console.log('success'); })