const allFuns = {}


Object.prototype.filter = function (cb, i = 0, keys = Object.keys(this), result = {}) {
    if (i === keys.length) return result
    if (cb(keys[i], this[keys[i]])) { result[keys[i]] = this[keys[i]] }
    return this.filter(cb, i + 1, keys, result)
}


allFuns.filter = filter

// module.exports = allFuns