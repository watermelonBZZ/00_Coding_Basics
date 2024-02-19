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
const primesOnly = (arr) => {
    return arr.filter((e) => {
        return isPrime(e)
    })
}
allFuns.primesOnly = primesOnly
allFuns.isPrime = isPrime


module.exports = allFuns
