const expr = require('express');
const app = expr();
app.get('' ,(req,resp)=>{
    resp.send('Hello Trying Express');
});

app.get('/about',(req,resp)=>{
    resp.send('hello we have tried about us page');
});

app.listen(1000);