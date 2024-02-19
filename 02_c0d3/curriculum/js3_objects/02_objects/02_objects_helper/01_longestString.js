const allFuns = {}

const longestString = (obj) => {
    const values = Object.values(obj)
    return values.reduce((acc, e) => {
        if (e.length > acc.length) return e
        return acc
    }, '')
}



allFuns.longestString = longestString

module.exports = allFuns