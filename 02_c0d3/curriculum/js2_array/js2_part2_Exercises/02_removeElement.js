
const allFuns = {}

const removeElement = (a, str, i = 0) => {
    if (i === a.length) return a

    if (a[i] === str) {
        a.splice(i, 1)
        return removeElement(a, str, i)
    }

    return removeElement(a, str, i + 1)

}

const a = ['Rocket', 'Groot', 'Groot', 'Star-Lord']
const b = removeElement(a, 'Groot')

console.log(b);
// You need this line for every function
allFuns.removeElement = removeElement

module.exports = allFuns