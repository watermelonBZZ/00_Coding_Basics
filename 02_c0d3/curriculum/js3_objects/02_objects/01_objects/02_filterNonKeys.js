const allFuns = {}

const filterNonKeys = (arr, obj) => {
    return arr.filter((e) => {
        return obj[e]
    }
    )
}

allFuns.filterNonKeys = filterNonKeys

module.exports = allFuns