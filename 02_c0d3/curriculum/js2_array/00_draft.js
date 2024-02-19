const ages = [22, 28, 80, 48, 32]
const add5InPlace = (elem, idx, arr) => {
    arr[idx] = arr[idx] + 5 // We could also put arr[idx] = elem + 5
    // However, note that elem = elem + 5 will NOT work because elem is
    //   a parameter of this function and won't modify the array!
}
ages.forEach(add5InPlace)

console.log(ages.forEach(add5InPlace));