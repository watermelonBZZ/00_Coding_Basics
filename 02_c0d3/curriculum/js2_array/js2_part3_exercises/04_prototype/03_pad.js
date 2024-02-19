const allFuns = {}

//function
//function

Array.prototype.pad = function (num, str) {
    if (num <= 0) return this
    this.push(str)
    return this.pad(num - 1, str)

}

const arr = ["<button name='submit'></button>", '<div></div>']
console.log(arr.pad(2, '<br/>'))



allFuns.pad = Array.prototype.pad

module.exports = allFuns
