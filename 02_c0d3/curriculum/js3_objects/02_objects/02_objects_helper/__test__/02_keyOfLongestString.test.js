const fn = require('../02_keyOfLongestString'); //check


describe('keyOfLongestString function', () => {
    it('should find key of longest string in the beginning of an object', () => {
        const info = {
            ironman: 'arrogant',
            spiderman: 'naive',
            hulk: 'strong'
        }
        expect(fn.keyOfLongestString(info)).toEqual('ironman')
    })
    it('should find key of longest string at the end of an object', () => {
        const leaders = {
            vermilion: 'Surge',
            cinnabar: 'Blaine',
            fuchsia: 'Koga',
            saffron: 'Sabrina'
        }
        expect(fn.keyOfLongestString(leaders)).toEqual('saffron')
    })
    it('should return undefined (no key) for an empty object', () => {
        expect(fn.keyOfLongestString({})).toEqual(undefined)
    })
})
