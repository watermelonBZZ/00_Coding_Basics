const fn = require('../04_copyReverse');

describe('copyReverse function', () => {
    it('should reverse copy an array of 4 elements', () => {
        const result = fn.copyReverse([1, 3, 5, 7])
        expect(result).toEqual([7, 5, 3, 1])
    })
    it('should not modify original array', () => {
        const arr = [1, 3, 5, 7]
        fn.copyReverse(arr)
        expect(arr).toEqual([1, 3, 5, 7])
    })
    it('should reverse copy an array of 1 element', () => {
        const result = fn.copyReverse(['bears'])
        expect(result).toEqual(['bears'])
    })
})

