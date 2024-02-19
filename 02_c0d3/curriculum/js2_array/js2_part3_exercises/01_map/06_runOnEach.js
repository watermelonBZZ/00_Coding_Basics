const allFuns = {}

//function
//function
const runOnEach = (arr, func) => {
    return arr.map(func)
}

console.log(runOnEach(['hello', 'my', 'name', 'is', 'pikachu'], e => {
    return e.toUpperCase()
}));

allFuns.runOnEach = runOnEach

module.exports = allFuns
