const getReturnValues = (arr) => {
    return arr.map((e) => { return e() })
}
const a = getReturnValues([
    () => {
        return 25
    },
    () => {
        return 29
    },
    () => {
        return 'Pikachu'
    }
])

console.log(a)