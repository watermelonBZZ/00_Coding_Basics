const fn = require('../03_copyWithout');

describe('copyWithout function', () => {
    it('should copy without 2 middle elements', () => {
        const result = fn.copyWithout([5, 2, 2, 9], 2)
        expect(result).toEqual([5, 9])
    })
    it('should not modify original array', () => {
        const arr = [5, 2, 2, 9]
        fn.copyWithout(arr, 2)
        expect(arr).toEqual([5, 2, 2, 9])
    })
    it('should copy without last 2 elements', () => {
        const result = fn.copyWithout([2, 2, 2, 3, 3], 3)
        expect(result).toEqual([2, 2, 2])
    })
    it('should return identical array if no matches', () => {
        const result = fn.copyWithout([2, 6, 4], 3)
        expect(result).toEqual([2, 6, 4])
    })
})
