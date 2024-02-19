const allFuns = {}

//function

Array.prototype.getIterator = function (i = -1, test = 5) {

    if (i === this.length) {
        i = 0
    }
    test += 1

    return () => {
        i += 1
        console.log(test)
        return this[i]
    }
}

iterate = ['PayPal', 'Google', 'Netflix'].getIterator()
console.log(iterate())
console.log(iterate())
console.log(iterate())
console.log(iterate())
console.log(iterate())


//function 对的

// Array.prototype.getIterator = function (i = -1) {

//     return () => {
//         i += 1
//         if (i === this.length) {
//             i = 0
//         }
//         return this[i]
//     }
// }

//function 对的
// Array.prototype.getIterator = function () {

//     let i = -1

//     return () => {
//         i += 1
//         return this[i % this.length]
//     }
// }



allFuns.getIterator = Array.prototype.getIterator

module.exports = allFuns
