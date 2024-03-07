// # Filesystem Homework

// ## Basic Requirements

// 1. Initialize a new npm project and create an `index.js` file.
// 2. Using the fs module create a new file called homework.txt
// 3. Create a path to the file using the `path` module
// 4. Inside the file write the following "Homework 02 in Basic Node"
// 5. Append to the file the following " FINISHED!"
// 6. Read the file contents and print them out in the console.

// - Don't forget to add a .gitignore file in your project as always.
import { editUser, deleteUser,deleteAll,addUser } from './usersService.js';


import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';



// const projectUrl = import.meta.url;
// // console.log("url to project path", projectUrl);
// const projectPath = path.dirname(fileURLToPath(projectUrl));
// // console.log('path', projectPath);

// // const directoryName = path.basename(projectPath);
// // console.log('DIRECTORY NAME', directoryName);

// const fileName = "homework.txt";
// const text = "Homework 02 in Basic Node";
console.log('-------------------------------------------------------------------')
const textFileUrl = import.meta.url; // url na momentalniot modul
console.log("url na  tekovniot modul", textFileUrl); 
const __dirname = path.dirname(fileURLToPath(textFileUrl));//so fileURLtoPath se konvertira url-to na datotekata vo path na datotekata
console.log('path na tekovniot modul', __dirname);
const filePath = path.join(__dirname, 'homework.txt');// se kreira pateka do homework.txt-so join se pridavaat path -ovite, i so const filePath se cuva celiot pat do datotekata so ime homework.txt
console.log('celata pateka do datotekata', filePath);
const fileText = "Homework 02 in Basic Node";// tekst sto kje go zapiseme vo datotekata
console.log('tekstot koj se zapisuva vo datotekata', fileText);
console.log('-------------------------------------------------------------------')



fs.writeFile(filePath, fileText, function(err){
    if(err){
        console.log("Error while writing to file", err);
        return
    }
    console.log("The text has been written successfully");
})

const textToAppend = "FINISHED!";
fs.appendFile(filePath,textToAppend, function(err){
    if(err){
        console.log("Error while appending to file", err);
        return
    }
   console.log("The text has been appended successfully");
});

fs.readFile(filePath, 'utf8',function(err,data){
    if(err){
        console.log("Error while reading the file",err);
        return
    }
    console.log("The file has been read successfully",data);
});




// deleteUser(2);
// deleteUser(4);

// deleteAll();

const userToAdd = [{
    
    name: "John Doe",
    username: "johnDoe",
    password: "johndoe@user.net"
},
{
    name: "Sime",
    username: "simepejoski",
    password: "jdoe@7898"

},

]


addUser(userToAdd);

for (const user of userToAdd) {
    addUser(user);
}


