const fn = require('../05_combineLess5'); //check

describe('combineLess5 function', () => {
    it('should combine strings in various positions', () => {
        const arr = ['Thor', 'Loki', 'Ant-Man', 'Rocket', 'Wasp']
        const result = fn.combineLess5(arr)
        expect(result).toEqual('ThorLokiWasp')
    })
    it('should return one element with length < 5', () => {
        const arr = ['Spiderman', 'Loki', 'Ant-Man', 'Rocket']
        const result = fn.combineLess5(arr)
        expect(result).toEqual('Loki')
    })
    it('should return empty string if no matching elements', () => {
        const arr = ['Black Panther', 'Doctor Strange', 'Captain Marvel']
        const result = fn.combineLess5(arr)
        expect(result).toEqual('')
    })
})