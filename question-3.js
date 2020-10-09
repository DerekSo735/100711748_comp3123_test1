const express = require('express');
const fs = require("fs");
const dir ='./logs';
const process = require('process')
const app = express();
const router = express.Router();

function createLogs(data){
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    
    process.chdir(dir)
    
    
    for (i=0;i<10;i++){
        fs.appendFile('log'+i+'.txt', data, function (err) {
            
            if (err) throw err;
            console.log('Log Saved!');
          });
          
    }
    fs.readdir(dir, (err, files) => {
        files.forEach(file => {
          console.log(file);
        });
      });
    
    
    
}
let logger = (req, res, next) => {
        
    let data  = `test`
    createLogs(data)
    next()
  }
app.use(logger);
app.listen(process.env.port || 8081);
 console.log('Web Server is listening at port '+ (process.env.port || 8081));




