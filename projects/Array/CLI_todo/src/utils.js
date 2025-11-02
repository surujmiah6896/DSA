const fs = require('fs');
const path = require('path');


module.exports.saveFile = (fileName, data) => {
    try{
        const dir = path.dirname(fileName);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(fileName, JSON.stringify(data), 'utf-8');
        console.log("Data saved successfully");
    }catch(err){
        console.error("Error writing file:", err);
        throw err;
    }
};

module.exports.readFile = (fileName) => {
    try{
        if (!fs.existsSync(fileName)) {
          console.log("File does not exist, creating empty data...");
          return [];
        }
        
        const data = fs.readFileSync(fileName, 'utf-8');
         if (!data) {
           console.log("File is empty, returning empty array...");
           return [];
         }
        return JSON.parse(data);
    }catch(err){
        console.error("Error reading file:", err);
        throw err;
    }
};