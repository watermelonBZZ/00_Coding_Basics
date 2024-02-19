const allFuns = {}

//function
const firstXToZero = (arr, num) => {
    return arr.map((e, i) => {
        if (i < num) {
            return e = 0
        }
        return e
    })
}
console.log(firstXToZero([9, 1, 2, 2, 9], 3));



allFuns.firstXToZero = firstXToZero //check

module.exports = allFuns
