const allFuns = {}

Array.prototype.getMostCommon = function () {
    const counts = this.reduce((acc, e) => {
        acc[e] = (acc[e] || 0) + 1
        return acc
    }, {})
    console.log(counts);
    const keys = Object.keys(counts)
    console.log(keys);
    if (!keys.length) return null
    const mostCommon = keys.reduce((acc, e, i) => {
        if (i === keys.length) return acc
        let temp = counts[e]
        if (counts[e] > counts[acc]) { return acc = keys[i] }
        return acc
    }, keys[0])
    if (parseInt(mostCommon)) return parseInt(mostCommon)
    return mostCommon


};
console.log(['Batman', 8, 7, 'Batman', 'Robin'].getMostCommon());


allFuns.getMostCommon = Array.prototype.getMostCommon //注意这里

// module.exports = allFuns