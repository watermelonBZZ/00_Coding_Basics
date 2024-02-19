
const allFuns = {}


const onlyIndex = (arr, num, i = 0, result = []) => {
    if (i === arr.length) return result

    result.push(arr[i][num])
    return onlyIndex(arr, num, i + 1, result)

}


// You need this line for every function
allFuns.onlyIndex = onlyIndex

module.exports = allFuns

