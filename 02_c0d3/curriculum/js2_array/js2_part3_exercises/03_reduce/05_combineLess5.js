const allFuns = {}

//function
//function
const combineLess5 = (arr) => {
    return arr.reduce((acc, e) => {
        if (e.length < 5) return acc + e
        return acc
    }, '')
}
allFuns.combineLess5 = combineLess5

module.exports = allFuns
