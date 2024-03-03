// Create a simple event-driven greeting application that greets users when they perform certain actions. 
// Follow these steps:
// 1. User Class.\
// Define a User class with properties like id, name and email.

// 2. Custom events class\
// Create a custom class (MyEmitter) that extends the EventEmitter class from Node.js's events module, to handle greeting events.

// 3. Register Event Listeners.\
// Register event listeners for different events related to user actions (register, login, logout). For example, create listeners for userRegister, userLogin, and userLogout.
// Example: greetingEmitter.on('userRegister', (user) => {})

// 4. Simulate User Actions.\
// Simulate user actions by creating instances of the User class and emitting events when users register, log in, or log out.


import { EventEmitter } from 'events';

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();


emitter.on('userRegister', (user) => {
    console.log(`Hello ${user.firstName}! You are registered with ID:${user.id} and email:${user.email}`);
});

emitter.on('userLogin', (user)=>{
    console.log(`You, ${user.firstName} logged in successfully with ID:${user.id} and email:${user.email}`);
});

emitter.on('userLogout', (user)=>{
    console.log(`You ${user.firstName} logged out successfully with ID:${user.id} and email:${user.email}`);
});


export default emitter;

