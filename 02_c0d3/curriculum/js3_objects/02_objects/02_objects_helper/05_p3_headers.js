const allFuns = {}


const headers = obj => {
    return Object.keys(obj).reduce((result, e, i) => {
        if (i === Object.keys(obj).length - 1) return `${result}<div><h1>${e}</h1><h2>${obj[e]}</h2></div>`
        return `${result}<div><h1>${e}</h1><h2>${obj[e]}</h2></div>  `
    }, '')
}

allFuns.headers = headers

module.exports = allFuns