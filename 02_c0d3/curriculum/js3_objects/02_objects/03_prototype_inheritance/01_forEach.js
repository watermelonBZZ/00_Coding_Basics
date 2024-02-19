const allFuns = {}

Object.prototype.forEach = function (cb, i = 0, keys = Object.keys(this)) {
    if (i === keys.length) return
    cb(keys[i], this[keys[i]], i)
    return this.forEach(cb, i + 1, keys)
}

allFuns.forEach = forEach

// module.exports = allFuns