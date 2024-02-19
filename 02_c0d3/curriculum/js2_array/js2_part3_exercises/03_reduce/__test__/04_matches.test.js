const fn = require('../04_matches'); //check

describe('matches function', () => {
    it('should match elements in various positions', () => {
        const result = fn.matches(['Thor', 'Loki', 'Ant-Man', 'Loki'], 'Loki')
        expect(result).toEqual(2)
    })
    it('should match concurrent elements', () => {
        const result = fn.matches(
            ['Spiderman', 'Spiderman', 'Mary Jane'],
            'Spiderman'
        )
        expect(result).toEqual(2)
    })
    it('should return 0 if no matches', () => {
        const result = fn.matches(['Thor', 'Loki', 'Ant-Man'], 'Wonder Woman')
        expect(result).toEqual(0)
    })
    it('should return 0 if for an empty array', () => {
        const result = fn.matches([], 'Thor')
        expect(result).toEqual(0)
    })
})