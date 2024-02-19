const allFuns = {}

//function

const append = (arr, str) => {
    return arr.map((e) => {
        e += str
        return e
    })
}
console.log(append(['hello', 'my', 'name', 'is', 'pikachu'], ' -log'));



allFuns.append = append //check

module.exports = allFuns
