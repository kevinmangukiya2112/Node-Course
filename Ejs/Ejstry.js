const expr = require('express');
const path = require('path');

const app = expr();
// const Folderpath = path.dirname(`path.dirname()`);
const rootFolderPath = path.resolve(__dirname,'..');
const ViewsFolder = path.join(rootFolderPath,'views');
app.set('view engine','ejs');
app.set('views',ViewsFolder);

app.get('',(req,resp)=>{
    resp.render(`profile`);
});

app.listen(1005);