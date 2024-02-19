const fn = require('../06_removeDupes'); //check


describe('removeDupes function', () => {
    it('should remove 2 sets of duplicate numbers', () => {
        const data = [9, 8, 7, 8, 7, 7, 7]
        data.removeDupes()
        expect(data).toEqual([9])
    })
    it('should remove 1 set of duplicate strings', () => {
        const data = ['ice', 'electric', 'psychic', 'ice', 'ground', 'ice']
        data.removeDupes()
        expect(data).toEqual(['electric', 'psychic', 'ground'])
    })
    it('should remove duplicate boolean values', () => {
        const data = ['grass', false, 'poison', 'electric', false]
        data.removeDupes()
        expect(data).toEqual(['grass', 'poison', 'electric'])
    })
    it("shouldn't remove anything from an array with no dups", () => {
        const data = ['Pewter', 'Saffron', 'Vermilion', 'Veridian']
        data.removeDupes()
        expect(data).toEqual(['Pewter', 'Saffron', 'Vermilion', 'Veridian'])
    })
    it('should leave an empty array unchanged', () => {
        const data = []
        data.removeDupes()
        expect(data).toEqual([])
    })
})