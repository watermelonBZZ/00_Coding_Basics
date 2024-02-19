const fn = require('../01_forEach'); //check


describe('forEach function', () => {
    it('should run a function 3 times on 3 elements', () => {
        const fun = jest.fn()
        const info = {
            ironman: 'arrogant',
            spiderman: 'naive',
            hulk: 'strong'
        }
        info.forEach(fun)
        expect(fun).toHaveBeenCalledTimes(3)
    })
    it('should run a function 0 times on an empty object', () => {
        const fun = jest.fn()
        const imEmpty = {}
        imEmpty.forEach(fun)
        expect(fun).not.toHaveBeenCalled()
    })
    it('should let functions access object values & positions', () => {
        const vals = []
        const fun = (_k, v, i) => {
            vals.push(i + v)
        }
        const info = {
            ironman: 'arrogant',
            spiderman: 'naive',
            hulk: 'strong'
        }
        info.forEach(fun)
        expect(vals).toEqual(['0arrogant', '1naive', '2strong'])
    })
})
