const fn = require('../04_countOccurrences'); //check


describe('countOccurrences function', () => {
    it('should count occurrences of strings', () => {
        const abc = ['abc', 'a', 'abc', 'b', 'abc', 'a', 'b', 'c', 'abc']
        const result = fn.countOccurrences(abc)
        expect(result).toEqual({ abc: 4, a: 2, b: 2, c: 1 })
    })
    it('should count occurrences of numbers', () => {
        const nums = [0, 3, 3, 1, 0, 0, 3, 0, 0, 2]
        const result = fn.countOccurrences(nums)
        expect(result).toEqual({ 0: 5, 3: 3, 1: 1, 2: 1 })
    })
    it('should return an empty object for an empty array', () => {
        const result = fn.countOccurrences([])
        expect(result).toEqual({})
    })
})