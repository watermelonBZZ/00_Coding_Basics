const fn = require('../03_removeLongestString'); //check

describe('removeLongestString function', () => {
    it('should remove the longest string in the beginning of an object', () => {
        const info = {
            ironman: 'arrogant',
            spiderman: 'naive',
            hulk: 'strong'
        }
        fn.removeLongestString(info)
        expect(info).toEqual({ spiderman: 'naive', hulk: 'strong' })
    })
    it('should remove the longest string at the end of an object', () => {
        const leaders = {
            vermilion: 'Surge',
            cinnabar: 'Blaine',
            fuchsia: 'Koga',
            saffron: 'Sabrina'
        }
        fn.removeLongestString(leaders)
        expect(leaders).toEqual({
            vermilion: 'Surge',
            cinnabar: 'Blaine',
            fuchsia: 'Koga'
        })
    })
    it('should work on an empty object', () => {
        const imEmpty = {}
        fn.removeLongestString(imEmpty)
        expect(imEmpty).toEqual({})
    })
})