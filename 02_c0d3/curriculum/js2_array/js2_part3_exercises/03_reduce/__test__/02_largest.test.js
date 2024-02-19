const fn = require('../02_largest'); //check

describe('largest function', () => {
    it('should find the largest number in the array', () => {
        const result = fn.largest([9, 8, 16, 2, 3])
        expect(result).toEqual(16)
    })
    it('should return undefined since given array is empty', () => {
        const result = fn.largest([])
        expect(result).toEqual(undefined)
    })
    it('should return first index of array if all numbers are same', () => {
        const result = fn.largest([10, 10, 10, 10])
        expect(result).toEqual(10)
    })
})