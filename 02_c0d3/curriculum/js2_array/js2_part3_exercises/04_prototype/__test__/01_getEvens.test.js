const fn = require('../01_getEvens'); //check

describe('getEvens function', () => {
    it('should pull even numbers from various positions', () => {
        const result = [9, 80, 11, 2].getEvens()
        expect(result).toEqual([80, 2])
    })
    it('should pull even numbers from concurrent positions', () => {
        const result = [2, 4, 6, 7, 8].getEvens()
        expect(result).toEqual([2, 4, 6, 8])
    })
    it('should have no result if no evens', () => {
        const result = [1, 3, 9, 21].getEvens()
        expect(result).toEqual([])
    })
})