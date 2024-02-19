const allFuns = {}

//function
//function
const sum = (arr) => {
    return arr.reduce((acc, e) => {
        return acc + e
    }, 0)
}
allFuns.sum = sum

module.exports = allFuns
