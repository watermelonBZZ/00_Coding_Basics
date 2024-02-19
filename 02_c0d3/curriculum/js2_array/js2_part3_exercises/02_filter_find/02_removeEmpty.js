const allFuns = {}

//function
const removeEmpty = (arr) => {
    return arr.filter((e) => {
        return e.length
    })
}
allFuns.removeEmpty = removeEmpty

module.exports = allFuns
