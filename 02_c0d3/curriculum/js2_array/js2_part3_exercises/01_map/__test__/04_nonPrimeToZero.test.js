const fn = require('../04_nonPrimeToZero'); //check

describe('nonPrimeToZero function', () => {
    it('should zero all numbers when non-prime', () => {
        const result = fn.nonPrimeToZero([-13, 0, 1, 4, 6])
        expect(result).toEqual([0, 0, 0, 0, 0])
    })
    it('should return an identical array if all are prime', () => {
        const result = fn.nonPrimeToZero([2, 17, 1601, 7919])
        expect(result).toEqual([2, 17, 1601, 7919])
    })
    it('should change only prime numbers to 0', () => {
        const result = fn.nonPrimeToZero([1, 2, 3, 4, 5])
        expect(result).toEqual([0, 2, 3, 0, 5])
    })
})