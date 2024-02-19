const fn = require('../05_getMostCommon'); //check


describe('getMostCommon function', () => {
    it('should return a number as the most common', () => {
        const result = [9, 8, 7, 8, 7, 7, 7].getMostCommon()
        expect(result).toEqual(7)
    })
    it('should return a string as the most common', () => {
        const arr = ['Batman', 8, 7, 'Batman', 'Robin']
        const result = arr.getMostCommon()
        expect(result).toEqual('Batman')
    })
    it('should return first element if all equally common', () => {
        const types = ['grass', 'poison', 'fire', 'flying', 'water', 'bug']
        const result = types.getMostCommon()
        expect(result).toEqual('grass')
    })
    it('should return null on an empty array', () => {
        const result = [].getMostCommon()
        expect(result).toEqual(null)
    })
})