const allFuns = {}

Array.prototype.removeDupes = function () {
    const counts = this.reduce((acc, e) => {
        acc[e] = (acc[e] || 0) + 1
        return acc
    }, {})

    // const keys = Object.keys(counts)
    console.log(counts);

    const result = (i = 0) => {
        if (i === this.length) return this
        if (counts[this[i]] > 1) {
            this.splice(i, 1)
            return result(i)
        }
        return result(i + 1)
    }

    return result() //注意一般这里要写return，不然这个函数没有返回值，但这里修改了原array，所以call原来的array可以不写

};
console.log([9, 8, 7, 8, 7, 7, 7].removeDupes());


allFuns.removeDupes = Array.prototype.removeDupes //注意这里

// module.exports = allFuns