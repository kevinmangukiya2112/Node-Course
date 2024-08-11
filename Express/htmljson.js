const expr = require('express');
const app =  expr();

app.get('',(req,resp)=>{
    const name = req.query.name;
    resp.send('<h1>hello '+name+' how are you??</h1><a href="/about">Go To About Page</a>');
});

app.get('/about',(req,resp)=>{
    resp.send('Welcome to about page<br><a href="/help">Go To Help Page</a>');

});

app.get('/help',(req,resp)=>{
    let jsondata = [
        {
            name:'kevin',
            mail:'kevin@test.com'
        },
        {
            name:'try',
            mail:'try@test.com'
        }
    ]
    resp.send(jsondata);
});

app.listen(1002);
