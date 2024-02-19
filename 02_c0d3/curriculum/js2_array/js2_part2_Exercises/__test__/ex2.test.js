const fn = require('../ex2.js')

describe('largest function', () => {
    it('should find the largest of 3 numbers', () => {
        const result = fn.largest([5, 3, 9])
        expect(result).toEqual(9)
    })
    it('should find the largest of 4 negative numbers', () => {
        const result = fn.largest([-20, -2, -5, -10])
        expect(result).toEqual(-2)
    })
    it('should return undefined on an empty array', () => {
        expect(fn.largest([])).toEqual(undefined)
    })
})