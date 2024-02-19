//不用把isNotPrime作为参数传入allPrime，
//allPrime可以直接调用已经声明的

const allFuns = {}


const isNotPrime = (num, i = 2) => {
    if (num < 2) return true

    if (num === 2) return false

    if (i === num) return false

    if (num % i === 0) return true

    return isNotPrime(num, i + 1)

}

const allPrime = (arr, i = 0) => {
    if (i === arr.length) return true

    if (isNotPrime(arr[i])) return false

    return allPrime(arr, i + 1)

}

console.log(allPrime([]));

allFuns.isNotPrime = isNotPrime
allFuns.allPrime = allPrime


module.exports = allFuns; //mde

