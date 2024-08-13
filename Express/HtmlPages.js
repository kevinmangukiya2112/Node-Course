const path = require('path');
const expr = require('express');

const app = expr();
const publicpath = path.join(__dirname,'Public');


app.get('',(req,resp)=>{
    resp.sendFile(`${publicpath}/index.html`);
});


app.get('/about',(req,resp)=>{
    resp.sendFile(`${publicpath}/about.html`);
});

app.get('*',(req,resp)=>{
    resp.sendFile(`${publicpath}/404.html`);
});
app.listen(1004);