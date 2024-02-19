const allFuns = {}


Array.prototype.getEvens = function (i = 0, result = []) {
    if (i === this.length) return result

    if (!(this[i] % 2)) {
        result.push(this[i])
    }

    return this.getEvens(i + 1, result)
}


const arr = [9, 80, 12, 2]
console.log(arr.getEvens())

allFuns.getEvens = Array.prototype.getEvens

module.exports = allFuns
