const allFuns = {}

//function
const largest = (arr, i = 0, max = arr[i]) => {

    if (i == arr.length) return max

    let num1 = arr[i]

    max = num1 > max ? num1 : max

    return largest(arr, i + 1, max)

}

console.log(largest([-20, -2, -5, -10]))

allFuns.largest = largest

module.exports = allFuns