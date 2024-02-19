const fn = require('../03_addDescriptions'); //check

describe('addDescriptions function', () => {
    it('should add 3 descriptions to corresponding names', () => {
        const characters = [
            { name: 'ironman' },
            { name: 'spiderman' },
            { name: 'hulk' }
        ]
        const info = {
            ironman: 'arrogant',
            spiderman: 'naive',
            hulk: 'strong'
        }
        fn.addDescriptions(characters, info)
        expect(characters).toEqual([
            { name: 'ironman', description: 'arrogant' },
            { name: 'spiderman', description: 'naive' },
            { name: 'hulk', description: 'strong' }
        ])
    })
    it('should not add descriptions to objects without names', () => {
        const characters = [
            { tonyStark: 'ironman' },
            { peterParker: 'spiderman' },
            { name: 'hulk' }
        ]
        const info = {
            ironman: 'arrogant',
            spiderman: 'naive',
            hulk: 'strong'
        }
        fn.addDescriptions(characters, info)
        expect(characters).toEqual([
            { tonyStark: 'ironman' },
            { peterParker: 'spiderman' },
            { name: 'hulk', description: 'strong' }
        ])
    })
    it('should ignore unmatched keys', () => {
        const characters = [
            { name: 'ironman' },
            { name: 'rocket' },
            { name: 'drax' }
        ]
        const info = {
            ironman: 'arrogant',
            spiderman: 'naive',
            hulk: 'strong'
        }
        fn.addDescriptions(characters, info)
        expect(characters).toEqual([
            { name: 'ironman', description: 'arrogant' },
            { name: 'rocket' },
            { name: 'drax' }
        ])
    })
})