const allFuns = {}

//function
//function
const clone = (arr) => {
    return arr.map((e) => {
        return e
    })


}
console.log(clone([1, 2, 3, 4]));

allFuns.clone = clone

module.exports = allFuns
