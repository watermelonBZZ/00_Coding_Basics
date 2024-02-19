const fn = require('../06_getIterator'); //check

describe('getIterator function', () => {
    it('should iterate through 3 elements', () => {
        const iterate = ['PayPal', 'Google', 'Netflix'].getIterator()
        expect(iterate()).toEqual('PayPal')
        expect(iterate()).toEqual('Google')
        expect(iterate()).toEqual('Netflix')
    })
    it('should return to beginning once done', () => {
        const iterate = [9, 80, 12, 2].getIterator()
        expect(iterate()).toEqual(9)
        expect(iterate()).toEqual(80)
        expect(iterate()).toEqual(12)
        expect(iterate()).toEqual(2)
        expect(iterate()).toEqual(9)
        expect(iterate()).toEqual(80)
    })
    it('should return undefined for empty array iterator', () => {
        const iterate = [].getIterator()
        expect(iterate()).toEqual(undefined)
    })
    it('should iterate through one element', () => {
        const iterate = ['Ironman'].getIterator()
        expect(iterate()).toEqual('Ironman')
        expect(iterate()).toEqual('Ironman')
    })
})