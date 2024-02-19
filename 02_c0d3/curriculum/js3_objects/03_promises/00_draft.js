const solution = async () => {
    const response = await fetch('https://api.openaq.org/v1/countries')
    const data = await response.json()
    const countries = data.results
    // console.log(countries)

    const city = countries.map((country) => {
        return country.cities
    })

    console.log(city)

}

solution()