const app=require('./app');
console.warn(10+29+20)
console.log(app.z())

const k=[1,2,3,4,5,6,3,3];
let result=k.filter((item)=>{
    return item===3
});
console.log(result)