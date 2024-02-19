const allFuns = {}

// selectiveZero
const selectiveZero = (arr, num, i = 0) => {
    if (i === arr.length) return arr
    if (arr[i] === num) {
        arr[i] = 0
    }
    return selectiveZero(arr, num, i + 1)
}

// You need this line for every function
allFuns.selectiveZero = selectiveZero



module.exports = allFuns