const fn = require('../05_p3_headers'); //check


describe('headers function (part 3)', () => {
    it('should create h1s for 3 items', () => {
        const info = {
            ironman: 'arrogant',
            spiderman: 'naive',
            hulk: 'strong'
        }
        const exp =
            '<div><h1>ironman</h1><h2>arrogant</h2></div>\
  <div><h1>spiderman</h1><h2>naive</h2></div>\
  <div><h1>hulk</h1><h2>strong</h2></div>'
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
            '<div><h1>vermilion</h1><h2>Surge</h2></div>\
  <div><h1>cinnabar</h1><h2>Blaine</h2></div>\
  <div><h1>fuchsia</h1><h2>Koga</h2></div>\
  <div><h1>saffron</h1><h2>Sabrina</h2></div>'
        expect(fn.headers(leaders)).toEqual(exp)
    })
    it('should return an empty string if no elements', () => {
        expect(fn.headers([])).toEqual('')
    })
})