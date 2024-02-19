const allFuns = {}


const headers = (obj) => {
    const keys = Object.keys(obj)
    const values = Object.values(obj)
    return keys.reduce((acc, e) => {
        return acc + `<h1>${e}</h1>`
    }, '')

}

allFuns.headers = headers

module.exports = allFuns