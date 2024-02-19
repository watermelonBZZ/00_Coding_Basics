const allFuns = {}


//function
const noMoreEvens = (arr) => {
    return arr.filter((e) => {
        return e % 2
    })
}


allFuns.noMoreEvens = noMoreEvens

module.exports = allFuns
