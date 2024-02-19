const fn = require('../04_commas'); //check


describe('commas function', () => {
    it('should separate three items', () => {
        const info = {
            ironman: 'arrogant',
            spiderman: 'naive',
            hulk: 'strong'
        }
        expect(fn.commas(info)).toEqual('arrogant, naive, strong')
    })
    it('should put no commas if only one element', () => {
        expect(fn.commas(['funny'])).toEqual('funny')
    })
    it('should return an empty string if no elements', () => {
        expect(fn.commas([])).toEqual('')
    })
})