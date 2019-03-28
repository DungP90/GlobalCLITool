#!/usr/bin/env node

const fs = require('fs');

let [,, ...path] = process.argv;

fs.readFile(path[0] ,'utf-8',(error,data)=>{
    if(error){
        console.error(error)
    } else
    console.log(`${data.length} characters`)
});