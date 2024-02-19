
const allFuns = {}

// result 和 arr 两个array所指向的地址不一样，所以就算未来arr 改了，result也不变
const copyArray = (arr, result = []) => {
    if (result.length === arr.length) return result

    result.push(arr[result.length])
    return copyArray(arr, result)
}

// You need this line for every function
allFuns.copyArray = copyArray

module.exports = allFuns