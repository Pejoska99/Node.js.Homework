// Create a function called editUser. This function will accept two parameters: a number (the id of the user) and user object (name, username and password properties) that will allow you to edit the user you have selected by id.
// Create a function called deleteUser. This function will accept one parameter: a number (the id of the user) and will delete the the user you have selected by id.
// Create a deleteAll function in the usersService that will delete all the users currently in users.json
// Refactor the addUser function so that the user object you are sending to the function won't contain the id, but just the name, username and password properties and think of a way how you can generate a new id for the added user. The new id should be the id of the last user incremented by one (if the last users id is 10, then the next user's id should be 11)
// Import all those functions into your index.js file and call them with the relevant data.
// Explore all the ways you can use the import syntax and use import instead of require.

import fs from 'fs';
const readUsersFromFile = () => {
    const usersExisting = fs.readFileSync('users.json', 'utf8');
    console.log("Users from file:", usersExisting);
    return JSON.parse(usersExisting);
};

export function editUser(id, userObject){
    const usersExisting = readUsersFromFile();
    const selctedUser = usersExisting.find(user => user.id === id);
    if(!selctedUser){
        console.log(`User with ID ${id} not found.`);
        return;

    }
    else {
        selctedUser.name = userObject.name;
        selctedUser.username = userObject.username;
        selctedUser.password = userObject.password;

        fs.writeFileSync('users.json', JSON.stringify(usersExisting));
        console.log(`User with ID ${id} edited successfully.`);
    }
   
}

// function deleteUser(id){
//     const usersExisting = readUsersFromFile();
//     const deleteUser = usersExisting.filter
// }

export function deleteUser(id){
     editUser(id,{});
    const usersExisting=readUsersFromFile();
    const deletedUsers =usersExisting.filter(user=>user.id !==id);
    fs.writeFileSync('users.json', JSON.stringify(deletedUsers));
    console.log(`User with ID ${id} deleted successfully.`);

}

export function deleteAll(){
    readUsersFromFile([]);
    fs.writeFileSync('users.json', JSON.stringify([]));
    console.log("All users deleted successfully.")

}

const getLastUserId = () => {
    const usersExisting = readUsersFromFile();
    if (usersExisting.length === 0) {
        return 0;
    }
   
    const completeUsers = usersExisting.filter(user => user.hasOwnProperty('id'));
    if (completeUsers.length === 0) {
        return 0;
    }
    return completeUsers[completeUsers.length - 1].id;
}



export function addUser (user) {
    const usersExisting = readUsersFromFile();
    // console.log(user);
    const newId = getLastUserId() +1;
    const newUser= {
        id: newId,
        name: user.name,
        username: user.username,
        password: user.password
    }
    usersExisting.push(newUser);
    
    const updatedUsersJSON = JSON.stringify(usersExisting);
    fs.writeFileSync('users.json',updatedUsersJSON);
    console.log('Additional user added to the users.json file');
    
}









