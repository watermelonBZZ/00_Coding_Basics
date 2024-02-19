const lib = require('../01_lib')

describe('Given a string, split it into words and return an object where each word is a key (capitalized) with value 1. Ignore strings shorter than 3 characters and numbers.', () => {

    it('should return an object with kv pairs', () => {
        const result = lib.tokenize('hello world')
        expect(result).toEqual({ HELLO: 1, WORLD: 1 })
    });

    it('should return an object with kv pairs', () => {
        const result = lib.tokenize('I like (Korean)')
        expect(result).toEqual({ 'LIKE': 1, '(KOREAN)': 1 })
    });

    it('should return {}', () => {
        const result = lib.tokenize('')
        expect(result).toEqual({})

    });

    it('should return {}', () => {
        const result = lib.tokenize('002')
        expect(result).toEqual({})

    });

});

describe('makeTrainingData', () => {
    it('should return {}', () => {
        const result = lib.makeTrainingData({})
        expect(result).toEqual({})
    });

    it('should return {}', () => {
        const result = lib.makeTrainingData({ 'beef boneless 100': 'MEAT' })
        expect(result).toEqual([{
            input: {
                BEEF: 1,
                BONELESS: 1
            },
            output: {
                MEAT: 1
            }
        }])
    });

    it('should turn 2 data to array of input/output', () => {
        const result = lib.makeTrainingData({
            'beef boneless 100': 'MEAT',
            'pink apples': 'VEGGIE'
        })
        expect(result).toEqual([
            {
                input: {
                    BEEF: 1,
                    BONELESS: 1
                },
                output: {
                    MEAT: 1
                }
            },
            {
                input: {
                    PINK: 1,
                    APPLES: 1
                },
                output: {
                    VEGGIE: 1
                }
            }
        ])
    })



});

describe(' pushes an array onto every array in an object.', () => {

    it('should return {}', () => {
        let data = {}
        const result = lib.pushAll(data, [9, 8, 7])
        expect(result).toEqual({})
    });

    it('should', () => {
        data = { blah: [['hello']] }
        const result2 = lib.pushAll(data, [9, 8, 7])
        expect(result2).toEqual({
            blah: [['hello'], [9, 8, 7]]
        })
    });

    it('should', () => {
        data = { blah: [] }
        const result2 = lib.pushAll(data, [9, 8, 7])
        expect(result2).toEqual({
            blah: [[9, 8, 7]]
        })
    });

    it('should return {}', () => {
        data = {
            blah: [['hello']],
            key2: []
        }
        const result2 = lib.pushAll(data, [9, 8, 7])
        expect(result2).toEqual({
            blah: [['hello'], [9, 8, 7]],
            key2: [[9, 8, 7]]
        })
    });



});

describe('finds the key with the largest value in an object.', () => {

    it('should return {}', () => {
        const result = lib.getMostLikely({})
        expect(result).toEqual({})
    });

    it('should ', () => {
        const result2 = lib.getMostLikely({
            meat: 0.987,
            veggie: 0.187,
            store: 0.287
        })
        expect(result2).toEqual('meat')
    });

    it('should ', () => {
        const result3 = lib.getMostLikely({
            meat: 0.287,
            veggie: 0.187,
            store: 0.987
        })
        expect(result3).toEqual('store')
    });
});