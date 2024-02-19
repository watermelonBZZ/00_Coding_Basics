const allFuns = {}

//function

const isPrime = (num, i = 2) => {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % i === 0) return false;
    if (i * i > num) return true;
    return isPrime(num, i + 1);
}

const nonPrimeToZero = (arr) => {
    return arr.map((e) => {
        if (!isPrime(e)) {
            return e = 0
        }
        return e
    })
}
console.log(nonPrimeToZero([1, 2, 3, 4, 5]));



allFuns.nonPrimeToZero = nonPrimeToZero //check

allFuns.isPrime = isPrime //check

module.exports = allFuns
