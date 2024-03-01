// create a variable thet will keep the text we want to append
// create a function that will append the new text ti the existing note.txt file
// create a function that will read the content of the note.txt file
// log the result into console 
// run the script using node exercise.js
// user import syntax, not required

import fs from 'fs';

const textToAppend = 'ADDED NEW TEXT';

fs.appendFile('homework.txt', textToAppend, function(err) {
    if(err) {
        console.log('Error while appending to file', err);
        return;
    }
    console.log('The text has been appended successfully'); 
});

fs.readFile('homework.txt', 'utf8', function (err, data) {
    if(err){
        console.log("Error while reading the file", err);
        return;
    }
    console.log("Content of the file", data);
});
