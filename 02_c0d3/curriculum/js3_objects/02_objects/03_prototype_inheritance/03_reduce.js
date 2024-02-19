const allFuns = {}

Object.prototype.reduce = function (cb, acc = '', i = 0, keys = Object.keys(this)) {
    if (i === keys.length) return acc
    const next = cb(acc, keys[i], this[keys[i]], i)
    return this.reduce(cb, acc = next, i + 1, keys)
}

allFuns.reduce = Object.prototype.reduce

// module.exports = allFuns