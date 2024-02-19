const allFuns = {}

//function
//function
Array.prototype.sum = function () {
    if (!this.length) return undefined

    let startingValue = ''
    if (typeof this[0] === 'number') {
        startingValue = 0
    }

    return this.reduce((acc, e) => {

        return acc + e
    }, startingValue)
}

const arr = [9, 80, 12, 2]
console.log(arr.sum())


allFuns.sum = Array.prototype.sum

module.exports = allFuns
