const allFuns = {}

//function
//function
const largerThan5 = (arr) => {
    return arr.reduce((acc, e) => {
        if (e > 5) {
            acc.push(e) //因为.pus()返回的是array的长度，不是array，所以在这句后面写return
        }
        return acc
    }, [])
}
allFuns.largerThan5 = largerThan5

module.exports = allFuns
