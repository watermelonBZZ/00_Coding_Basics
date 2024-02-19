const fn = require('../02_setMaxSize'); //check
describe('setMaxSize prototype', () => {
    it('maxSize should stay four', () => {
        const arr = ['Michelangelo', 'Leonardo', 'Raphael']
        arr.setMaxSize(4)
        arr.push('Donatello')
        arr.setMaxSize(3)
        arr.push('Shredder')
        arr.setMaxSize(1)
        arr.push('Splinter')
        expect(arr.length).toEqual(4)
    })
    it('maxSize should increase', () => {
        const arr = ['Michelangelo']
        arr.setMaxSize(2)
        arr.push('Donatello')
        expect(arr.length).toEqual(2)
    })
    it('maxSize keeps array empty', () => {
        const arr = []
        arr.setMaxSize(0)
        arr.push('M', 'L', 'R')
        expect(arr.length).toEqual(0)
    })
})