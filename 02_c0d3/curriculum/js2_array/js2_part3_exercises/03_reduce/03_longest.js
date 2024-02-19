const allFuns = {}

//function
//function
const longest = (arr) => {
    return arr.reduce((acc, e) => {
        if (e.length > acc.length) return e
        return acc
    }, arr[0])
}
allFuns.longest = longest

module.exports = allFuns
