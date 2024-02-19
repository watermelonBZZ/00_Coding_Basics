const fn = require('../01_longestString'); //check


describe('longestString function', () => {
    it('should find the longest string from the beginning of an object', () => {
        const info = {
            ironman: 'arrogant',
            spiderman: 'naive',
            hulk: 'strong'
        }
        expect(fn.longestString(info)).toEqual('arrogant')
    })
    it('should find the longest string from the end of an object', () => {
        const leaders = {
            vermilion: 'Surge',
            cinnabar: 'Blaine',
            fuchsia: 'Koga',
            saffron: 'Sabrina'
        }
        expect(fn.longestString(leaders)).toEqual('Sabrina')
    })
    it('should return the empty string for an empty object', () => {
        expect(fn.longestString({})).toEqual('')
    })
})