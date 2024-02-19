// const fn = require('../03.js'); //check

jest.mock('request')
const request = require('request')
const fs = require('fs')
const pokemon = require('../03')

describe('Pokemons', () => {
    test('should write two different pokemon names', () => {
        request.mockClear()
        pokemon.getNames()

        fs.writeFile = jest.fn()
        request.mock.calls[0][1](
            {},
            {},
            JSON.stringify({
                results: [
                    {
                        name: 'RahiZzYyY'
                    },
                    {
                        name: 'McGiggles'
                    },
                    {
                        name: 'BrownDynamite'
                    }
                ]
            })
        )
        expect(fs.writeFile.mock.calls.length).toEqual(1)
        expect(fs.writeFile.mock.calls[0][1]).toEqual(
            '<h1>RahiZzYyY</h1><h1>McGiggles</h1><h1>BrownDynamite</h1>'
        )
    })
})