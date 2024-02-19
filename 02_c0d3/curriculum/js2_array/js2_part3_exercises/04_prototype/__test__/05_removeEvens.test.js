const fn = require('../05_removeEvens'); //check

describe('removeEvens function', () => {
    it('should remove even numbers from various positions', () => {
        const arr = [9, 80, 11, 2]
        arr.removeEvens()
        expect(arr).toEqual([9, 11])
    })
    it('should remove even numbers from concurrent positions', () => {
        const arr = [2, 4, 6, 7, 8]
        arr.removeEvens()
        expect(arr).toEqual([7])
    })
    it('should leave array the same if no evens', () => {
        const arr = [1, 3, 9, 21]
        arr.removeEvens()
        expect(arr).toEqual([1, 3, 9, 21])
    })
    it('should leave empty array the same', () => {
        const arr = []
        arr.removeEvens()
        expect(arr).toEqual([])
    })
})