const fn = require('../01_addKV'); //check


describe('addKV function', () => {
    it('should add a key and value to an object', () => {
        const marvel = {
            ironman: 'arrogant',
            spiderman: 'naive',
            hulk: 'strong'
        }
        fn.addKV(marvel, 'antman', 'funny')
        expect(marvel.antman).toEqual('funny')
    })
    it('should add a key and value to an object', () => {
        const marvel = {
            ironman: 'arrogant',
            spiderman: 'naive',
            hulk: 'strong',
            antman: 'funny'
        }
        fn.addKV(marvel, 'wonderwoman', 'smart')
        expect(marvel.wonderwoman).toEqual('smart')
    })
    it('should add a key and value to an object', () => {
        const marvel = {
            ironman: 'arrogant',
            spiderman: 'naive',
            hulk: 'strong',
            antman: 'funny',
            wonderwoman: 'smart'
        }
        const b = ['leader', 'honest']
        fn.addKV(marvel, 'captainamerica', ['leader', 'honest'])
        expect(marvel.captainamerica).toEqual(b)
    })
})