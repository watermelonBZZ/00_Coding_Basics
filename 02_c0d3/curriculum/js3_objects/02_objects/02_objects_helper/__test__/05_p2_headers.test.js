const fn = require('../05_p2_headers'); //check


describe('headers function (part 2)', () => {
    it('should create h1s for 3 items', () => {
        const info = {
            ironman: 'arrogant',
            spiderman: 'naive',
            hulk: 'strong'
        }
        // The line breaks are just for ease of reading;
        //   they won't count as part of the expected
        //   solution since they're escaped with \
        const exp =
            '<h1>ironman: arrogant</h1>\
  <h1>spiderman: naive</h1><h1>hulk: strong</h1>'
        expect(fn.headers(info)).toEqual(exp)
    })
    it('should create headers for 4 elements', () => {
        const leaders = {
            vermilion: 'Surge',
            cinnabar: 'Blaine',
            fuchsia: 'Koga',
            saffron: 'Sabrina'
        }
        const exp =
            '<h1>vermilion: Surge</h1>\
  <h1>cinnabar: Blaine</h1><h1>fuchsia: Koga</h1>\
  <h1>saffron: Sabrina</h1>'
        expect(fn.headers(leaders)).toEqual(exp)
    })
    it('should return an empty string if no elements', () => {
        expect(fn.headers([])).toEqual('')
    })
})
