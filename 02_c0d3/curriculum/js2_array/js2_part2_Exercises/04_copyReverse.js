
const allFuns = {}


const copyReverse = (arr, result = []) => {
    if (result.length === arr.length) return result

    result.unshift(arr[result.length])
    return copyReverse(arr, result)

}

console.log(copyReverse([5, 2, 2, 9]));

// You need this line for every function
allFuns.copyReverse = copyReverse

module.exports = allFuns