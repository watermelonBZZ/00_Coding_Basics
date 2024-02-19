const fn = require('../03_longest'); //check
describe('longest function', () => {
    it('should find the longest string at the end of the array', () => {
        const result = fn.longest(['Thor', 'Loki', 'Rocket', 'Ant-Man'])
        expect(result).toEqual('Ant-Man')
    })
    it('should find the longest string in the middle of the array', () => {
        const result = fn.longest(['Thor', 'Spiderman', 'Ant-Man'])
        expect(result).toEqual('Spiderman')
    })
    it('should return string from array of length 1', () => {
        const result = fn.longest(['Wasp'])
        expect(result).toEqual('Wasp')
    })
})