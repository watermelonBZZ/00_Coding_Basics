const allFuns = {}

const removeLongestString = (obj) => {
    const keys = Object.keys(obj)
    //在object里，keys就是index，所以有keys就能找到values
    if (keys.length === 0) return undefined
    const lValue = keys.reduce((acc, e) => {
        if (obj[e].length > obj[acc].length) return e
        return acc
    }, keys[0])

    delete obj[lValue]
    return obj
}



allFuns.removeLongestString = removeLongestString

module.exports = allFuns