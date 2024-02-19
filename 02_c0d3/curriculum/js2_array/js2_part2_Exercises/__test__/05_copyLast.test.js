const fn = require('../05_copyLast');

describe('copyLast function', () => {
    const heroes = ['Ironman', 'Thor', 'Captain', 'Black Widow', 'Hulk']
    const original = [...heroes]
    it('should skip the first 2 elements', () => {
        const result = fn.copyLast(heroes, 2)
        expect(result).toEqual(['Captain', 'Black Widow', 'Hulk'])
    })
    it('should not modify original array', () => {
        fn.copyLast(heroes, 2)
        expect(heroes).toEqual(original)
    })
    it('should skip the first 0 elements (copy whole array)', () => {
        const result = fn.copyLast(heroes, 0)
        expect(result).toEqual(heroes)
    })
    it('should return empty array if skipping past array length', () => {
        const result = fn.copyLast(heroes, 6)
        expect(result).toEqual([])
    })
})

