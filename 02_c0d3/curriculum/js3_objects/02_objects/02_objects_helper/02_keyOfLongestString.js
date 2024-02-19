const allFuns = {}


const keyOfLongestString = (obj) => {
    const keys = Object.keys(obj)
    //在object里，keys就是index，所以有keys就能找到values
    const lValue = keys.reduce((acc, e) => {
        if (obj[e].length > obj[acc].length) return e
        return acc
    }, keys[0])

    return lValue


}


allFuns.keyOfLongestString = keyOfLongestString

module.exports = allFuns