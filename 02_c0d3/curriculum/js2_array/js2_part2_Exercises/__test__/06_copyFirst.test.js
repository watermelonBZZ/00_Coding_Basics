const fn = require('../06_copyFirst');

describe('copyFirst function', () => {
    const heroes = ['Ironman', 'Thor', 'Captain', 'Black Widow', 'Hulk']
    const original = [...heroes]
    it('should skip the last 2 elements', () => {
        const result = fn.copyFirst(heroes, 2)
        expect(result).toEqual(['Ironman', 'Thor', 'Captain'])
    })
    it('should not modify original array', () => {
        fn.copyFirst(heroes, 2)
        expect(heroes).toEqual(original)
    })
    it('should skip the last 0 elements (copy whole array)', () => {
        const result = fn.copyFirst(heroes, 0)
        expect(result).toEqual(heroes)
    })
    it('should return empty array if skipping past array length', () => {
        const result = fn.copyFirst(heroes, 6)
        expect(result).toEqual([])
    })
})
