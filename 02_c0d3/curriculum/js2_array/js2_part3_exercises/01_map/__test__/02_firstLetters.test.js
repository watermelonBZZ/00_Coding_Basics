const fn = require('../02_firstLetters');
describe('firstLetters function', () => {
    it('should grab the first letters from 5 strings', () => {
        const result = fn.firstLetters(['hello', 'my', 'name', 'is', 'pikachu'])
        expect(result).toEqual(['h', 'm', 'n', 'i', 'p'])
    })
    it('should grab the first letters from 3 strings', () => {
        const result = fn.firstLetters(['JavaScript', 'is', 'awesome'])
        expect(result).toEqual(['J', 'i', 'a'])
    })
    it('should return an empty array when given an empty array', () => {
        const result = fn.firstLetters([])
        expect(result).toEqual([])
    })
})