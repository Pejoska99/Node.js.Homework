// # Filesystem Homework

// ## Basic Requirements

// 1. Initialize a new npm project and create an `index.js` file.
// 2. Using the fs module create a new file called homework.txt
// 3. Create a path to the file using the `path` module
// 4. Inside the file write the following "Homework 02 in Basic Node"
// 5. Append to the file the following " FINISHED!"
// 6. Read the file contents and print them out in the console.

// - Don't forget to add a .gitignore file in your project as always.
import { editUser } from './usersService.js';
import { deleteUser } from './usersService.js';
import {deleteAll}from './usersService.js';


import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const projectUrl = import.meta.url;
// console.log("url to project path", projectUrl);
const projectPath = path.dirname(fileURLToPath(projectUrl));
// console.log('path', projectPath);

// const directoryName = path.basename(projectPath);
// console.log('DIRECTORY NAME', directoryName);

const fileName = "homework.txt";
const text = "Homework 02 in Basic Node";

fs.writeFile(fileName, text, function(err){
    if(err){
        console.log("Error while writing to file", err);
        return
    }
    console.log("The text has been written successfully");
})

const textToAppend = "FINISHED!";
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

editUser(5, {name: 'Nikola', username: 'niki', password: '1234'});
editUser(1, {name: 'Biljana', username: 'Pejoska', password: '8978'});

deleteUser(2);
deleteUser(4);

deleteAll();






