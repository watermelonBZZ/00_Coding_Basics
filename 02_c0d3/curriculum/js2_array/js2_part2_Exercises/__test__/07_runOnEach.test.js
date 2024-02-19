const fn = require('../07_runOnEach');
describe('copyWithCall function', () => {
    const heroes = ['Ironman', 'Thor', 'Captain']
    const thanos = () => {
        return 'Thanos'
    }
    it('should call a function with two arguments', () => {
        const result = fn.runOnEach([1, 2, 3, 4, 5], (e, i) => {
            return e + i
        })
        expect(result).toEqual([1, 3, 5, 7, 9])
    })
    it('should not modify original array', () => {
        const original = [...heroes]
        fn.runOnEach(heroes, thanos)
        expect(heroes).toEqual(original)
    })
    it('should call a function with no arguments', () => {
        const result = fn.runOnEach(heroes, thanos)
        expect(result).toEqual(['Thanos', 'Thanos', 'Thanos'])
    })
})