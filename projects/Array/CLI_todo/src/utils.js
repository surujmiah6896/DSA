const fs = require('fs');
const path = require('path');


module.exports.saveFile = (fileName, data) => {
    try{
        fs.writeFileSync(fileName, JSON.stringify(data, null, 2), 'utf-8');
    }catch(err){
        console.error("Error writing file:", err);
        throw new Error(err);
    }
};

module.exports.readFile = (fileName) => {
    try{
        if(!fs.existsSync(fileName)){
            return [];
        }
        const data = fs.readFileSync(fileName, 'utf-8');
        return JSON.parse(data);
    }catch(err){
        console.error("Error reading file:", err);
        throw new Error(err);
    }
};