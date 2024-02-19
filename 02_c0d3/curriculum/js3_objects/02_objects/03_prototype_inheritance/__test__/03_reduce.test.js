const fn = require('../03_reduce'); //check

describe('reduce function', () => {
    it('should let functions access keys, values, & positions', () => {
        const fun = (acc, key, value, i) => {
            return acc + `${key}-${i}-${value},`
        }
        const info = {
            ironman: 'arrogant',
            spiderman: 'naive',
            hulk: 'strong'
        }
        const result = info.reduce(fun, '')
        const exp = 'ironman-0-arrogant,spiderman-1-naive,hulk-2-strong,'
        expect(result).toEqual(exp)
    })
    it('should return the starting value if the object is empty', () => {
        const imEmpty = {}
        const result = imEmpty.reduce(() => { }, 'I am Groot')
        expect(result).toEqual('I am Groot')
    })
})