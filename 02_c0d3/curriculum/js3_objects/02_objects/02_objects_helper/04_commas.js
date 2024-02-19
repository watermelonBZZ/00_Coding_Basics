const allFuns = {}


const commas = (obj) => {
    const keys = Object.keys(obj)
    return keys.reduce((acc, key, i) => {
        let firstComma = ', '
        if (i === 0) firstComma = ''


        return acc + firstComma + obj[key]
    }, '')
}

allFuns.commas = commas

module.exports = allFuns