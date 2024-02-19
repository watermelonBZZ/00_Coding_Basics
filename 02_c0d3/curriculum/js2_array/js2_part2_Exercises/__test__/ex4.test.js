const fn = require('../ex4'); //rqr

describe('allPrime function', () => {
    it('should return true for an array of all primes', () => {
        const result = fn.allPrime([2, 3, 17, 19])
        expect(result).toEqual(true)
    })
    it('should return false for an array with some primes', () => {
        const result = fn.allPrime([0, 7, 11, 12])
        expect(result).toEqual(false)
    })
    it('should return true for an empty array', () => {
        const result = fn.allPrime([])
        expect(result).toEqual(true)
    })
})