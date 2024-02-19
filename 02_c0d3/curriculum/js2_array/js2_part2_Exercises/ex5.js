// 答案里面，前后比大小的遍历index从1 开始，然后和i-1 比，很聪明！
// const increasing = (arr, i = 1) => {
//     if (i >= arr.length) {
//       return true
//     }
//     if (arr[i] <= arr[i - 1]) return false
//     return increasing(arr, i + 1)
//   }


const allFuns = {}

const increasing = (arr, i = 1, max = arr[0]) => {

    if (i === arr.length) return true

    let num1 = arr[i]

    if (num1 <= max) return false
    max = num1

    return increasing(arr, i + 1, max)

}

console.log(increasing([51]));

allFuns.increasing = increasing

module.exports = allFuns
