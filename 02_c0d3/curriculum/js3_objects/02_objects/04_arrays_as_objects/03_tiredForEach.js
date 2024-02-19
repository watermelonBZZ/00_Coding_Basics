const allFuns = {}

Array.prototype.tiredForEach = function (cb, num) {
    if (this.notPrint) {
        return console.log(`Too tired. Please wait ${this.num}.`)
    };

    this.notPrint = true
    // console.log(this.notPrint);
    this.num = num

    //先运行return，然后（this.num时间）内this.notPrint为true，所以再执行Array.prototype.tiredForEach 会显示tootired
    //（this.num时间）后，会this.notPrint = false，就可以再次执行Array.prototype.tiredForEach
    //summary，就是在处理一个数据之后，可以强制在一段时间之后才可以运行相同的函数。
    //且setTimeout要写在return之前，不然就不会执行
    setTimeout(() => {
        this.notPrint = false
        console.log(this.notPrint);
    }, num)
    return this.forEach(cb)

};

allFuns.tiredForEach = Array.prototype.tiredForEach //注意这里

// module.exports = allFuns

const a = ['chinese', 'african', 'korean']
const callback = (e, i) => {
    console.log(e + i)
}
a.tiredForEach(callback, 180)
a.tiredForEach(callback, 180)
a.tiredForEach(callback, 180)