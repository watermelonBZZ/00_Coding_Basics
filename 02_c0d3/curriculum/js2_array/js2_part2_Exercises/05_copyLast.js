
const allFuns = {}


const copyLast = (arr, num, i = 0, result = []) => {
    if (i === arr.length) return result

    if (i < num) {
        return copyLast(arr, num, i + 1, result)

    }


    result.push(arr[i])
    return copyLast(arr, num, i + 1, result)

}

console.log(copyLast(['Ironman', 'Thor', 'Captain', 'Black Widow', 'Hulk'], 2));

// You need this line for every function
allFuns.copyLast = copyLast

module.exports = allFuns

