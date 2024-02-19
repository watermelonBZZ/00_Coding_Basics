
const allFuns = {}


const copyWithout = (arr, num, i = 0, result = []) => {
    if (i === arr.length) return result

    if (arr[i] !== num) {
        result.push(arr[i])
    }

    return copyWithout(arr, num, i + 1, result)
}

console.log(copyWithout([5, 2, 2, 9], 2));

// You need this line for every function
allFuns.copyWithout = copyWithout

module.exports = allFuns