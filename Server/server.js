const http=require('http');
http.createServer((req,resp)=>{
    resp.write("<h1>hello kevin here</h1>");
    resp.end();
}).listen(8080);

function tryusingfunction(req,resp){
    resp.write("<h1>try usnig function</h1>")
    resp.end();
}

http.createServer(tryusingfunction).listen(8000);