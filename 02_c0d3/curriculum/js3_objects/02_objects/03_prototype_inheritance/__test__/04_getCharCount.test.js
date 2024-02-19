const fn = require('../04_getCharCount'); //check


describe('getCharCount function', () => {
    it('should count letters in an array of 3 strings', () => {
        const result = ['Charmander', 'Charmeleon', 'Charizard'].getCharCount()
        expect(result).toEqual({
            C: 3,
            h: 3,
            a: 5,
            r: 5,
            m: 2,
            n: 2,
            d: 2,
            e: 3,
            l: 1,
            o: 1,
            i: 1,
            z: 1
        })
    })
    it('should handle an empty array', () => {
        const result = [].getCharCount()
        expect(result).toEqual({})
    })
    it('should count characters in empty strings', () => {
        const result = ['Pallet', '', 'Pewter', '', 'Saffron'].getCharCount()
        expect(result).toEqual({
            P: 2,
            a: 2,
            l: 2,
            e: 3,
            t: 2,
            w: 1,
            r: 2,
            S: 1,
            f: 2,
            o: 1,
            n: 1
        })
    })
})