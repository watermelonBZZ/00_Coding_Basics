const allFuns = {}

//function
//function
const matches = (arr, str) => {
    return arr.reduce((acc, e) => {
        if (e === str) {
            return acc + 1
        }
        return acc
    }, 0)
}
allFuns.matches = matches

module.exports = allFuns
