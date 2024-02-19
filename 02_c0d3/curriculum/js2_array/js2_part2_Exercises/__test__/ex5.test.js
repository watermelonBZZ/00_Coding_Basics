const fn = require('../ex5');

describe('increasing function', () => {
    it('should return true for an increasing array', () => {
        const result = fn.increasing([2, 7, 9, 10])
        expect(result).toEqual(true)
    })
    it('should return false for an array that decreases', () => {
        const result = fn.increasing([19, 13, 17, 11])
        expect(result).toEqual(false)
    })
    it('should return false if elements are repeated', () => {
        const result = fn.increasing([2, 7, 7, 10])
        expect(result).toEqual(false)
    })
    it('should return true for an array of one number', () => {
        const result = fn.increasing([51])
        expect(result).toEqual(true)
    })
})