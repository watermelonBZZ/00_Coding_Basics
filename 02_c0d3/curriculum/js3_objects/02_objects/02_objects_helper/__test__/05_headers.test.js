const fn = require('../05_headers'); //check


describe('headers function (part 1)', () => {
    it('should create h1s for 3 items', () => {
        const info = {
            ironman: 'arrogant',
            spiderman: 'naive',
            hulk: 'strong'
        }
        expect(fn.headers(info)).toEqual(
            '<h1>ironman</h1><h1>spiderman</h1><h1>hulk</h1>'
        )
    })
    it('should create headers for 4 elements', () => {
        const leaders = {
            vermilion: 'Surge',
            cinnabar: 'Blaine',
            fuchsia: 'Koga',
            saffron: 'Sabrina'
        }
        expect(fn.headers(leaders)).toEqual(
            '<h1>vermilion</h1><h1>cinnabar</h1><h1>fuchsia</h1><h1>saffron</h1>'
        )
    })
    it('should return an empty string if no elements', () => {
        expect(fn.headers([])).toEqual('')
    })
})