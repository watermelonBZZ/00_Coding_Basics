const fn = require('../ex3.js')

describe('firstXToZero function', () => {
    it('should change 3 numbers to 0', () => {
        const result = fn.firstXToZero([0, 5, 9, 6], 3)
        expect(result).toEqual([0, 0, 0, 6])
    })
    it('should not modify the array when changing 0 elements', () => {
        const result = fn.firstXToZero(["Don't", 'change', 'me'], 0)
        expect(result).toEqual(["Don't", 'change', 'me'])
    })
    it('should change all to zero when X beyond array length', () => {
        const result = fn.firstXToZero([1, 2, 3], 4)
        expect(result).toEqual([0, 0, 0])
    })
})