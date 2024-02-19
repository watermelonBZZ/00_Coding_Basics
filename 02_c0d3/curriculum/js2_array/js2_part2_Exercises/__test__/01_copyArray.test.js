const fn = require('../01_copyArray');

describe('copyArray function', () => {
    it('should copy an array of 3 elements', () => {
        const result = fn.copyArray([-5, -23, 'study'])
        expect(result).toEqual([-5, -23, 'study'])
    })
    it('should not modify original array', () => {
        const original = [
            'hi',
            1,
            () => {
                return 5
            },
            'apple',
            45
        ]
        const result = fn.copyArray(original)
        original[0] = 'Drax'
        expect(result[0]).toEqual('hi')
    })
    it('should copy an empty array', () => {
        const result = fn.copyArray([])
        expect(result).toEqual([])
    })
})