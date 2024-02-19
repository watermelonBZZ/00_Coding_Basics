const fn = require('../06_largerThan5'); //check
describe('largerThan5 function', () => {
    it('should find numbers larger than 5 from various positions', () => {
        const result = fn.largerThan5([5, 9, 2, 6, 5])
        expect(result).toEqual([9, 6])
    })
    it('should find concurrent numbers larger than 5', () => {
        const result = fn.largerThan5([8, 8, 2, 3, 10])
        expect(result).toEqual([8, 8, 10])
    })
    it('should return empty array if no numbers larger than 5', () => {
        const result = fn.largerThan5([1, 2, 3, 4, 5])
        expect(result).toEqual([])
    })
})