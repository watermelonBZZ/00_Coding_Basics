const allFuns = {}

//function
const firstLetters = (arr) => {
    return arr.map((e) => {
        return e[0]
    })
}

console.log(firstLetters(['hello', 'my', 'name', 'is', 'pikachu']));

allFuns.firstLetters = firstLetters

module.exports = allFuns
