const fn = require('../ex1.js')

describe('selectiveZero function', () => {
    it('should change multiple instances of the input number to 0', () => {
        const arr = [5, 2, 2, 9]
        fn.selectiveZero(arr, 2)
        expect(arr).toEqual([5, 0, 0, 9])
    })
    it('should return an empty array', () => {
        const arr = []
        const result = fn.selectiveZero(arr, 3)
        expect(result).toEqual(arr)
    })
    it('should not modify an array with no matches', () => {
        const arr = [8, 9, 1, "I'm a string"]
        const original = [...arr]
        fn.selectiveZero(arr, 6)
        expect(arr).toEqual(original)
    })
})