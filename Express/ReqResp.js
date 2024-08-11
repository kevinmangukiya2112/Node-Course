const expr =  require('express');
const app = expr();

app.get('',(req,resp)=>{
   let name = req.query.name;
   resp.send("your name is "+name);
});

app.listen(1001);