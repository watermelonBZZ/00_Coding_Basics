// const allFuns = {} 
const fs = require('fs')
const solution = async function () {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
    const data = await response.json()
    const pokemons = data.results

    //await Promise.all()一下map中fetch的对象
    const results = await Promise.all(pokemons.map(async function (pokemon) {
        const name = pokemon.name
        const urlResponse = await fetch(pokemon.url)
        const urlData = await urlResponse.json()
        const pic = urlData.sprites.front_default
        return { name, pic }


    })
    )

    const htmlStr = results.reduce((acc, e) => {
        return acc + `<div><p>${e.name}</p><img src="${e.pic}"/></div>`
    }, '')

    fs.writeFile('namesandimages.html', htmlStr, () => {
        console.log('success');
    })


}


solution()


// allFuns.name = name
// module.exports = allFuns