
const axios = require('axios')
const fs = require('fs')


axios('https://pokeapi.co/api/v2/pokemon?limit=100')
    .then((response) => {
        // To have the results, it lies in the data.results of responsed promise
        const results = response.data.results
        return results
    }
    )
    .then((results) => {
        const pokemonList = []
        results.forEach((element) => {
            const name = element.name
            // this returns Promise, becasue using AXIOS.
            const picPromise = axios(element.url)
                .then((pokemon) => {
                    return pokemon.data.sprites.front_default
                });
            pokemonList.push(
                // Promise.resolve(picPromise) returns a thenable PROMISE with pokemon's url
                // .then() takes this url PROMISE and name variable into a new PROMISE
                Promise.resolve(picPromise).then((pic) => ({ name, pic }))
            );
            // pokemonList.push({ name, pic }),this is not right, as the pokemonList will be an array of objects, in which each element contains (name(type of string), pic(type of Promise))
            // Promise.all(pokemonList) EXPECTS an ARRAY of PROMISES

            // the final pokemonList to use in html should have readable context, which means not Promises here.
            // converting promises is needed.
            // solutions:
            // 1. use Promise.resolve().then() to take different elements into ONE PROMISE, and store it in an varibale.
            // 2. then Promise.all() the varibale

        });

        // Return a Promise of a array of objects in which contain name and pic url has been returned
        return Promise.all(pokemonList)
    })
    .then((namePic) => {
        const htmlStr = namePic.reduce((acc, e) => {
            return acc + `<div><p>${e.name}</p><img src="${e.pic}"/></div>`;
        }, '');

        fs.writeFile('namesandimages.html', htmlStr, (err) => {
            if (err) throw err;
            console.log('success');
        });
    })
    .catch(error => {
        console.error(error)
    })







