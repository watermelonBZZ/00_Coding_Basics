const fn = require('../04_firstPrime'); //check

describe('firstPrime function', () => {
    it('should find a prime at the beginning of the array', () => {
        const result = fn.firstPrime([2, 17, 1601, 7919])
        expect(result).toEqual(2)
    })
    it('should find a prime at the end of the array', () => {
        const result = fn.firstPrime([1, 4, 16, 7919])
        expect(result).toEqual(7919)
    })
    it('should find no primes in an empty array', () => {
        expect(fn.firstPrime([])).toEqual(undefined)
    })
})