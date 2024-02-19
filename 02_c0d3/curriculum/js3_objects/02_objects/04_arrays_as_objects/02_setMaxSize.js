const allFuns = {}

Array.prototype.setMaxSize = function (max) {
    this.max = max
    this.oldPush = this.push
    console.log(this.max);
    console.log(this.length);

    //这里给实例array添加了一个函数object，可以调用
    //只要每个执行了setMaxsize函数的array都会加上一个这个功能
    this.push = (str) => {
        if (this.length < this.max) {
            this.oldPush(str)
            return console.log(this);
        }
        return console.log('toomuch');
    }
};

allFuns.setMaxSize = Array.prototype.setMaxSize //注意这里

// module.exports = allFuns

const a = ['Edna', 'Optimus', 'Minion']
a.setMaxSize(4)

a.push('Groot') // push returns 4.
// Array is ["Edna", "Optimus", "Minion", "Groot"]

a.push('hello') 