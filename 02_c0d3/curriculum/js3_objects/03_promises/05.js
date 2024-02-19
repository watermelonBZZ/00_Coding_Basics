const solution = async function () {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await response.json();
    const pokemons = data.results;

    const pokemonList = await Promise.all(
        pokemons.map(async (pokemon) => {
            const name = pokemon.name;
            const urlData = await fetch(pokemon.url);
            const data2 = await urlData.json();
            const weight = data2.weight;

            return { name, weight };
        })
    );

    const maxWeight = pokemonList.reduce(function (acc, pokemon) {
        if (pokemon.weight > acc.weight) {
            acc.name = pokemon.name;
            acc.weight = pokemon.weight;
        }
        return acc;
    }, { name: '', weight: 0 });

    return maxWeight;
};

solution().then((result) => {
    console.log(result);
});