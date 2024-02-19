
const allFuns = {}


const copyFirst = (arr, num, i = 0, result = []) => {
    if (num > arr.length) return []
    if (i == arr.length - num) return result
    result.push(arr[i])
    return copyFirst(arr, num, i + 1, result)
}

console.log(copyFirst(['Ironman', 'Thor', 'Captain', 'Black Widow', 'Hulk'], 2));

// You need this line for every function
allFuns.copyFirst = copyFirst

module.exports = allFuns

