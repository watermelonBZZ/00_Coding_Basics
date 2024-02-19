const fs = require('fs')

fs.writeFile('./lib.js', 'const allFuns = {} \nconst name = (params) => {\n}\nallFuns.name = name\nmodule.exports = allFuns', () => { console.log('success'); })