// const allFuns = {}

// //function
// //function
// const name = (params) => {

// }
// allFuns.name = name

// module.exports = allFuns

const fs = require('fs')

fs.writeFile('./06.js', 'const allFuns = {} \nconst name = (params) => {\n}\nallFuns.name = name\nmodule.exports = allFuns', () => { console.log('success'); })