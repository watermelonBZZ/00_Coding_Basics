const allFuns = {}

//function
const isPrime = (num, i = 2) => {
    if (num < 2) return false;
    if (num === 2) return true;

    if (num % i === 0) return false;
    if (i * i > num) return true;

    return isPrime(num, i + 1);
}

//function
const firstPrime = (arr) => {
    return arr.find((e) => {
        return isPrime(e)
    })
}
allFuns.firstPrime = firstPrime
allFuns.isPrime = isPrime


module.exports = allFuns
