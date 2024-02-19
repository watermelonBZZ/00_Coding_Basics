const allFuns = {}

//function
const firstXToZero = (arr, num, i = 0) => {

    if (i === num) return arr
    if (i === arr.length) return arr

    arr[i] = 0
    return firstXToZero(arr, num, i + 1)

}

allFuns.firstXToZero = firstXToZero

module.exports = allFuns

