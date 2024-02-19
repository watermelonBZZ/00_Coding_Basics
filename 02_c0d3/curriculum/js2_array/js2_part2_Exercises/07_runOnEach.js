
const allFuns = {}


const runOnEach = (arr, fun, i = 0, result = []) => {
    if (i === arr.length) return result
    result.push(fun(arr[i], i))

    return runOnEach(arr, fun, i + 1, result)
}


// You need this line for every function
allFuns.runOnEach = runOnEach

module.exports = allFuns

