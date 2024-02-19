const fn = require('../02_filterNonKeys'); //check


describe('filterNonKeys function', () => {
    const avengers = ['ironman', 'strange', 'thor', 'spiderman', 'hulk']
    const info = {
        ironman: 'arrogant',
        spiderman: 'naive',
        hulk: 'strong'
    }
    it('should return an empty array when filtering on an empty object', () => {
        const result = fn.filterNonKeys(avengers, {})
        expect(result).toEqual([])
    })
    it('should return an empty array when starting with an empty array', () => {
        const result = fn.filterNonKeys([], info)
        expect(result).toEqual([])
    })
    it('should return an empty array if no matches are found', () => {
        const b = ['batman', 'superman', 'flash']
        const result = fn.filterNonKeys(b, info)
        expect(result).toEqual([])
    })
})
