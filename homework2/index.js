import emitter from './events.js';

import { User } from './user.js';



const greetUser = new User(1, 'Biljana', "biljana@gmail.com");
console.log('Greet user:', greetUser);
const greetUser1 = new User(2, 'Kristijan', "kristijan@gmail.com");
console.log('Greet user:', greetUser1);

emitter.emit('userRegister', greetUser);
console.log('Greet user:', greetUser);
emitter.emit('userRegister', greetUser1);
console.log('Greet user:', greetUser1);

emitter.emit('userLogin', greetUser);
console.log('Greet user:', greetUser);
emitter.emit('userLogin', greetUser1);
console.log('Greet user:', greetUser1);

emitter.emit('userLogout', greetUser);
console.log('Greet user:', greetUser);
emitter.emit('userLogout', greetUser1);
console.log('Greet user:', greetUser1);



