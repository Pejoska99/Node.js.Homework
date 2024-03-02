// create a variable thet will keep the text we want to append
// create a function that will append the new text ti the existing note.txt file
// create a function that will read the content of the note.txt file
// log the result into console 
// run the script using node exercise.js
// user import syntax, not required


import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const projectUrl = import.meta.url;
// console.log("url to project path", projectUrl);
const projectPath = path.dirname(fileURLToPath(projectUrl));
// console.log('path', projectPath);

// const directoryName = path.basename(projectPath);
// console.log('DIRECTORY NAME', directoryName);

const fileName = "note.txt";
const text ="Hello World"

fs.writeFile(fileName, text, function(err){
    if(err){
        console.log("Error while writing to file", err);
        return
    }
    console.log("The text has been written successfully");
})

const textToAppend ="Hello there Again";
fs.appendFile(fileName,textToAppend, function(err){
    if(err){
        console.log("Error while appending to file", err);
        return
    }
   console.log("The text has been appended successfully");
});

fs.readFile(fileName, 'utf8',function(err,data){
    if(err){
        console.log("Error while reading the file",err);
        return
    }
    console.log("The file has been read successfully",data);
});