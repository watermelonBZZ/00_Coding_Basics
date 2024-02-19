const allFuns = {}

//function
//如果是调用map，就需要再多一个()
Array.prototype.fizzbuzz = function (i = 0) {

    if (i === this.length) return this
    if (this[i] % 3 === 0 && this[i] % 5 === 0) {
        this[i] = 'fizzbuzz'
    }

    if (this[i] % 3 === 0) {
        this[i] = 'fizz'
    }

    if (this[i] % 5 === 0) {
        this[i] = 'buzz'
    }

    return this.fizzbuzz(i + 1)

}

const arr = [1, 2, 5, 10, 11]
console.log(arr.fizzbuzz())

allFuns.fizzbuzz = Array.prototype.fizzbuzz

module.exports = allFuns
