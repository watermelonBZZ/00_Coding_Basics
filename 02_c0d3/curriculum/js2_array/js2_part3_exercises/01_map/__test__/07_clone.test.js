const fn = require('../07_clone'); //check

describe('clone function', () => {
    const farm1 = ['sheep', 'cow', 'pig']
    const farm2 = fn.clone(farm1)
    it('should clone an array of several elements', () => {
        expect(farm1).toEqual(farm2) // deep equality
    })
    it('should not return the same array', () => {
        expect(farm1 === farm2).toBeFalsy()
    })
    it('should clone an empty array', () => {
        expect(fn.clone([])).toEqual([])
    })
})
