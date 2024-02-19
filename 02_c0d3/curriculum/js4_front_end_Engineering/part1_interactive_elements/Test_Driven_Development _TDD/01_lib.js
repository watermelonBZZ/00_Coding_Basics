const allFuns = {}
const tokenize = (str) => {

    if (!str.length) return {}
    const newArr = str.split(' ')

    return newArr.reduce((acc, e) => {
        if (e.length < 3) return acc
        if (+e || e === 0) return acc
        acc[e.toUpperCase()] = (acc[e.toUpperCase()] || 0) + 1
        return acc
    }, {})
}

const makeTrainingData = (obj) => {
    // get kv pairs in array
    const dataENtries = Object.entries(obj)

    //check if empty 
    if (dataENtries.length === 0) return {}

    //add object of kv pairs in array 
    return dataENtries.map((kvPairs) => {

        const keys = kvPairs[0]
        const value = kvPairs[1].toUpperCase()
        const output = {}
        output[value] = 1
        return {
            input: tokenize(keys),
            output
        }
    })

}

const pushAll = (obj, arr) => {
    const keys = Object.keys(obj)
    if (keys.length === 0) return {}
    keys.forEach((el) => {
        obj[el].push([...arr])
    })
    return obj
}

const getMostLikely = (obj) => {
    const keys = Object.keys(obj)
    if (keys.length === 0) {
        return {}
    }
    return keys.reduce((acc, el) => {
        if (obj[el] > obj[acc]) {
            acc = el
            return acc
        }
        return acc

    }, keys[0])

}


console.log(test);

allFuns.tokenize = tokenize
allFuns.makeTrainingData = makeTrainingData
allFuns.pushAll = pushAll
allFuns.getMostLikely = getMostLikely

module.exports = allFuns