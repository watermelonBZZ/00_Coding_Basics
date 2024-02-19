const allFuns = {}

Array.prototype.getCharCount = function () {
    let allArr = this.reduce((acc, e) => {
        return acc + e;
    }, '').split('');
    // allArr = allArr.split('')


    return allArr.reduce((acc, e) => {
        acc[e] = (acc[e] || 0) + 1;
        return acc;
    }, {});
};

allFuns.getCharCount = Array.prototype.getCharCount //注意这里

// module.exports = allFuns