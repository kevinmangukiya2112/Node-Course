const fs = require('fs');
const path = require('path');
const dirPath= path.join(__dirname);
const input = process.argv;

for(var i=0;i<input[2];i++){
    fs.writeFileSync(`${dirPath}/dynamicfiles${i}.txt`,`${i} file created`);
}