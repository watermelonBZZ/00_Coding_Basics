const fn = require('../03_pad'); //check

describe('pad function', () => {
    it('should modify the original array', () => {
        const arr = ['Doctor']
        arr.pad(1, 'Strange')
        expect(arr).toEqual(['Doctor', 'Strange'])
    })
    it('should pad multiple times', () => {
        const arr = ["<button name='submit'></button>", '<div></div>']
        arr.pad(2, '<br/>')
        expect(arr).toEqual([
            "<button name='submit'></button>",
            '<div></div>',
            '<br/>',
            '<br/>'
        ])
    })
    it('should return same array when given negative pad number', () => {
        const result = ['Quill', 'Gamora'].pad(-2, 'Drax')
        expect(result).toEqual(['Quill', 'Gamora'])
    })
    it('should return same array when given zero pad number', () => {
        const result = ['Quill', 'Gamora'].pad(0, 'Drax')
        expect(result).toEqual(['Quill', 'Gamora'])
    })
})