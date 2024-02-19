const fn = require('../04_fizzbuzz.js'); //check

describe('fizzbuzz function', () => {
    it('should change numbers divisible by 3 to fizz', () => {
        const magicNumbers = [1, 2, 3, 6, 19, 18]
        magicNumbers.fizzbuzz()
        expect(magicNumbers).toEqual([1, 2, 'fizz', 'fizz', 19, 'fizz'])
    })
    it('should change numbers divisible by 5 to buzz', () => {
        const magicNumbers = [1, 2, 5, 10, 11]
        magicNumbers.fizzbuzz()
        expect(magicNumbers).toEqual([1, 2, 'buzz', 'buzz', 11])
    })
    it('should change numbers divisible by 15 to fizzbuzz', () => {
        const magicNumbers = [1, 2, 4, 15, 16, 30]
        magicNumbers.fizzbuzz()
        expect(magicNumbers).toEqual([1, 2, 4, 'fizzbuzz', 16, 'fizzbuzz'])
    })
    it('should correctly change 3 to fizz, 5 to buzz, and 15 to fizzbuzz', () => {
        const magicNumbers = [9, 80, 12, 2, 30]
        magicNumbers.fizzbuzz()
        expect(magicNumbers).toEqual(['fizz', 'buzz', 'fizz', 2, 'fizzbuzz'])
    })
})