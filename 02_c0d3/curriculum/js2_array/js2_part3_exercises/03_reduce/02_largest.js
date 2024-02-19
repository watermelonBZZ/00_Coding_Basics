const allFuns = {}

//function
//function
const largest = (arr) => {
    return arr.reduce((acc, e) => {
        if (e > acc) return e
        return acc
    }, arr[0])
}
allFuns.largest = largest

module.exports = allFuns
