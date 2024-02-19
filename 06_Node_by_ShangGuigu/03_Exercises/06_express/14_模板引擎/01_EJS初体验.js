// //1. 安装 EJS
// //2. 导入 EJS
// const ejs = require('ejs');
// const fs = require('fs');

// //字符串
// let china = '中国';
// // let str = `我爱你 ${china}`;
// let weather = '今天天气不错~';

// //声明变量
// let str = fs.readFileSync('./01_html.html').toString();

// //使用 ejs 渲染
// let result = ejs.render(str, {china: china, weather});

// console.log(result);



const ejs = require('ejs')
const fs = require('fs')

const country = 'china'
const html = fs.readFileSync('./01_html.html').toString()
console.log(html);


let str = ejs.render(html, { c: country })
console.log(str);