const fn = require('../02_filter'); //check


describe('filter function', () => {
    const leaders = {
        vermilion: 'Surge',
        cinnabar: 'Blaine',
        fuchsia: 'Koga',
        saffron: 'Sabrina'
    }
    it('should filter based on keys', () => {
        const seven = k => {
            return k.length === 7
        }
        const result = leaders.filter(seven)
        expect(result).toEqual({ fuchsia: 'Koga', saffron: 'Sabrina' })
    })
    it('should filter based on keys', () => {
        const six = (_k, v) => {
            return v.length < 6
        }
        const result = leaders.filter(six)
        expect(result).toEqual({ vermilion: 'Surge', fuchsia: 'Koga' })
    })
    it('should return an empty object if no matches', () => {
        const celadon = k => {
            return k === 'Celadon'
        }
        const result = leaders.filter(celadon)
        expect(result).toEqual({})
    })
})

