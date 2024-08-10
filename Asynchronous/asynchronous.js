let a = 20;
let b = 10;

setTimeout(()=>{
    b = 30;
},2000);

console.log(a+b);   // due to async we will get here 20+10 cause before time out it will executes console.


// for handling async with data here is the solution
// we can use promises to handle async.
let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        b = 30;
        resolve(b);
    },10000);
});

waitingData.then((data)=>{
    console.log(a+data);  // here we will get 20+30 cause we used promise to wait that addition operation.
});
