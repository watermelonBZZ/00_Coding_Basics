const fn = require('../01_getNext'); //check
describe('getNext function', () => {
    it('should iterate through 3 elements', () => {
        const arr = ['Edna', 'Optimus', 'Minion']
        let result = arr.getNext()
        expect(result).toEqual('Edna')
        expect(arr.getNext()).toEqual('Optimus')
        expect(arr.getNext()).toEqual('Minion')
    })
    it('should return to beginning once done', () => {
        const arr = [9, 80, 12, 2]
        expect(arr.getNext()).toEqual(9)
        expect(arr.getNext()).toEqual(80)
        expect(arr.getNext()).toEqual(12)
        expect(arr.getNext()).toEqual(2)
        expect(arr.getNext()).toEqual(9)
        expect(arr.getNext()).toEqual(80)
    })
    it('should return undefined for an empty array', () => {
        const arr = []
        expect(arr.getNext()).toEqual(undefined)
    })
    it('should iterate through one element', () => {
        const arr = ['Ironman']
        expect(arr.getNext()).toEqual('Ironman')
        expect(arr.getNext()).toEqual('Ironman')
    })
    it(`shouldn't iterate`, () => {
        const arr = []
        expect(arr.getNext()).toEqual()
        expect(arr.getNext()).toEqual()
        expect(arr.getNext()).toEqual()
        expect(arr.getNext()).toEqual()
    })
})