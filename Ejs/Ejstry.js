const expr = require('express');
const path = require('path');

const app = expr();
// const Folderpath = path.dirname(`path.dirname()`);
const rootFolderPath = path.resolve(__dirname,'..');
const ViewsFolder = path.join(rootFolderPath,'views');
app.set('view engine','ejs');
app.set('views',ViewsFolder);

app.get('/profile',(req,resp)=>{
    const user = {
        name : 'Kevin',
        email : 'kevin@test.com',
        city : 'bvn',
        country : 'india',
        skills : [
            'php','js','css','node','sql','react','backend'
        ]
    };
    resp.render(`profile`,{user});
});

app.get('',(req,resp)=>{
    resp.render(`login`)
});

app.listen(1005);