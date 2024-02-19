const allFuns = {}

// 因为e是字符串，所以只能用[e]
// 不然就是acc.''，会报错
const countOccurrences = (arr) => {
    return arr.reduce((acc, e) => {
        acc[e] = (acc[e] || 0) + 1
        return acc
    }, {})
}

console.log(countOccurrences([9, 8, 7, 8, 7, 7, 7]))

allFuns.countOccurrences = countOccurrences

module.exports = allFuns