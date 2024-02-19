const allFuns = {}

//function
const oddToZero = (arr) => {
    return arr.map((e) => {
        if (e % 2 !== 0) return e = 0
        return e
    })
}


console.log(oddToZero([1, 2, 3, 4, 5]));

allFuns.oddToZero = oddToZero

module.exports = allFuns
