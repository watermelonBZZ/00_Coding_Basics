const fn = require('../02_removeElement');

describe('remove function', () => {
    it('should not remove anything', () => {
        const data = ['Rocket', 'Groot', 'Star-Lord']
        const result = fn.removeElement(data, 'Random')
        expect(result).toEqual(['Rocket', 'Groot', 'Star-Lord'])
    })
    it('should remove 1 element', () => {
        const data = ['Rocket', 'Groot', 'Star-Lord']
        const result = fn.removeElement(data, 'Star-Lord')
        expect(result).toEqual(['Rocket', 'Groot'])
    })
    it('should remove all elements', () => {
        const data = ['Rocket', 'Rocket', 'Rocket']
        const result = fn.removeElement(data, 'Rocket')
        expect(result).toEqual([])
    })
})