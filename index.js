// const app=require('./app');
// console.warn(10+29+20)
// console.log(app.z())

// const k=[1,2,3,4,5,6,3,3];
// let result=k.filter((item)=>{
//     return item===3
// });
// console.log(result)

const path = require('path');
const expr = require('express');

const app = expr();
const publicpath = path.join(__dirname,'Express/Public');
// console.log(publicpath);

app.use(express.static(publicpath));
app.listen(1003);