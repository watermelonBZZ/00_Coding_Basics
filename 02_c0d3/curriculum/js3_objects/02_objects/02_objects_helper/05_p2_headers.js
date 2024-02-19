const allFuns = {}


const headers = obj => {
    return Object.entries(obj).reduce((result, e, i) => {
        return `${result}<h1>${e[0]}: ${e[1]}</h1>`
    }, '')
}

allFuns.headers = headers

module.exports = allFuns