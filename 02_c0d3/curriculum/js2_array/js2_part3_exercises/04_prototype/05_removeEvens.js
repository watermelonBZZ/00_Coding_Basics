const allFuns = {}

//function
//function

Array.prototype.removeEvens = function (i = 0) {
    if (i >= this.length) return this
    if (!(this[i] % 2)) {
        this.splice(i, 1)
        return this.removeEvens(i)
    }
    return this.removeEvens(i + 1)
}

const arr = [9, 80, 12, 2]
console.log(arr.removeEvens())

allFuns.removeEvens = Array.prototype.removeEvens

module.exports = allFuns
