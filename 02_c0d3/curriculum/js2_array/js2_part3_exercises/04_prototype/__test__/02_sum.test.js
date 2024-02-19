const fn = require('../02_sum'); //check

describe('sum function', () => {
    it('should find sum of an array of numbers', () => {
        const result = [2, 17, 3, -3].sum()
        expect(result).toEqual(19)
    })
    it('should add strings together', () => {
        const data = ['<p>', "<img src='https://placebear.com/800/710'>", '</p>']
        const result = data.sum()
        expect(result).toEqual(
            "<p><img src='https://placebear.com/800/710'></p>"
        )
    })
    it('should return undefined for an empty array', () => {
        const result = [].sum()
        expect(result).toEqual(undefined)
    })
})