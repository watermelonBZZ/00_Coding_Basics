const allFuns = {}

Array.prototype.getNext = function () {
    //是从0开始，不是从1开始，所以这个写法不对    
    // this.counter = (this.counter || 0) + 1

    if (this.counter === undefined) this.counter = -1
    this.counter += 1

    if (this.counter === this.length) { this.counter = 0 }

    return this[this.counter]


    // this.counter = (this.counter || 0) + 1

    // if (this.counter === this.length) { this.counter = 0 }
    // console.log(this.counter);

    // return this[this.counter]


    // const index = this.indexCounter || 0
    // this.indexCounter = (index + 1) % this.length
    // console.log(this.indexCounter);
    // return this[index]


};

const a = [9, 80, 12, 2]

a.getNext()
a.getNext()
a.getNext()
a.getNext()
a.getNext()
a.getNext()
a.getNext()

allFuns.getNext = Array.prototype.getNext //注意这里

// module.exports = allFuns