// NODE JS USES V8 ENGINE

// THE V8 ENGINE COMPILES JS TO MACHINE CODE

// NODE JS HAS ADDED FEATURES, BUT CANNOT RUN IN THE BROWSER

// JAVASCRIPT ON THE SERVER

// DATABASE
// AUTHENTICATION
// INPUT VALIDATION
// YOUR BUSINESS LOGIC HERE

// NODE JS IS NOT LIMITED TO THE SERVER


// ROLE OF NODE JS IN WEB DEVELOPMENT

// RUN SERVER
// create server and listen to incoming request

// BUSINESS LOGIC
// handle requests
// validate input
// connect to database

// RESPONSES
// return responses

// THE REPL
// Read
// Evaluate
// Print
// Loop




// JAVASCRIPT REFRESHER

// const person = {
//     name: 'Austin',
//     age: 29,
//     greet() {
//         console.log(`HI, i am ${this.name}`);
//     }
// }

// const copiedPerson = {...person};
// console.log(copiedPerson);

// person.greet();


// const hobbies = ['sports', 'cooking'];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }

// console.log(hobbies.map(hobby => {
//     return 'Hobby: ' + hobby;
// }));
// console.log(hobbies);
// hobbies.push('Programming');


// .slice() will make a copy of old array.
// const copiedArray = hobbies.slice();


// SPREAD OPERATOR
// const copiedArray = [...hobbies];

// console.log(copiedArray);


// const toArray = (...args) => {
//     return args;
// }

// console.log(toArray(1, 2, 3));



// DESTRUCTURING

// const person = {
//     name: 'Austin',
//     age: 29,
//     greet() {
//         console.log(`HI, i am ${this.name}`);
//     }
// };

// const printName = ({ name }) => {
//     console.log(name);
// }

// printName(person);

// const { name, age } = person;

// console.log(name, age);


// const hobbies = ['sports', 'cooking'];

// const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);






// ASYNC CODE AND PROMISES

// const fetchData = () => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Done!');
//         }, 1500);
//     });
//     return promise;
// };

// setTimeout(() => {
//     console.log('Timer is done!');
//     fetchData()
//     .then(text => {
//         console.log(text);
//         return fetchData();
//     })
//     .then(text2 => {
//         console.log(text2);
//     });

// }, 2000);

// console.log('hello');
// console.log('hi');