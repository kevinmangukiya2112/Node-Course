const fs = require('fs');
const path = require('path');

const folderpath = path.join(__dirname,'crudfile');
const input = process.argv;

if (!fs.existsSync(folderpath)){
    fs.mkdirSync(folderpath);
}

function createFile(filename, content){
    const filepath = path.join(folderpath, filename);
    fs.readdir(folderpath,(err,files)=>{
        if(!err) {
            if(files.length == 0){
                fs.writeFileSync(filepath, content);
            }else{
                files.forEach((item)=>{
                    if(item != filename){
                        fs.writeFileSync(filepath, content);
                    } else if(item == filename){
                     fs.readFile(filepath,'utf8',(err,filecontent)=>{
                            if(!err && content != filecontent){
                                fs.appendFile(filepath,content,(err)=>{
                                    if(err){
                                        console.log(`Error in appending file ${err}`);
                                    }else{
                                        console.log(`File Updated Sucessfully`);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }
    });
}

function deleteFile(filename){
    const filepath = path.join(folderpath, filename);
    fs.unlink(filepath, (err)=>{
        if(!err){
            console.log(`File ${filename} deleted successfully.`);
        } else {
            console.log(`Error in deleting file ${filename}: ${err}`);
        }
    });
}

function renameFile(oldfilename,newfilename){
    const oldfilepath = path.join(folderpath,oldfilename);
    const newfilepath = path.join(folderpath,newfilename);
    fs.rename(oldfilepath,newfilepath,(err)=>{
        if(!err){
            console.log('file renamed sucessfully');
        }
    })
}

if(input[2] == 'createFile') createFile(input[3],input[4]);
else if(input[2] == 'deleteFile') deleteFile(input[3]);
else if(input[2] == 'renameFile') renameFile(input[3],input[4]);