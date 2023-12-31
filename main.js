/*
Challenge 1
Create a function that has two parameters (name and age) and returns an object. 
Let's call this function makePerson. This function will:
Create an empty object
Add a name property to the newly created object with its value being the 'name' 
argument passed into the function
Add an age property to the newly created object with its value 
being the 'age' argument passed into the function
Return the object
*/

function makePerson(name, age) {
    const person = {};
    person.name = name,
        person.age = age

    return person
}

const vicky = makePerson('Vicky', 24);


// /********* Uncomment these lines to test your work! *********/
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24

/*
Using Object.create
Challenge 2
Inside personStore object,
 create a property greet where the value is a function that logs "hello".
*/

/*** CHALLENGE 2 ***/

const personStore = {
    // add code here

    greet: function () {
        console.log("hello")
    }
}
// /********* Uncomment this line to test your work! *********/
personStore.greet(); // -> Logs 'hello'

/*
Challenge 3
Create a function personFromPersonStore 
that takes as input a name and an age. 
When called, the function will create person objects 
using the Object.create method on the personStore object.
*/

/*** CHALLENGE 3 ***/

function personFromPersonStore(name, age) {
    const person2 = Object.create(personStore)
    person2.name = name;
    person2.age = age;

    return person2;
}

const sandra = personFromPersonStore('Sandra', 26);


// /********* Uncomment these lines to test your work! *********/
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'

/*
Challenge 4
Without editing the code you've already written, 
add an introduce method to the personStore object 
that logs "Hi, my name is [name]".
*/
personStore.introduce = function () {
    console.log(`Hi, my name is ${this.name}`)
}
sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/*
Using the NEW keyword
Challenge 5
Create a function PersonConstructor
 that uses the this keyword to save a single property 
 onto its scope called greet. 
 greet should be a function that logs the string 'hello'.
*/

/*** CHALLENGE 5 ***/

function PersonConstructor() {
    // add code here
    // const person3 = Object.create(personStore)
    this.greet = function () {
        console.log("hello")
    }
    // return person3;
}


// /********* Uncomment this line to test your work! *********/
const simon = new PersonConstructor;
simon.greet(); // -> Logs 'hello'

/*
Challenge 6
Create a function personFromConstructor
 that takes as input a name and an age.
  When called, the function will create person objects 
  using the new keyword instead of the Object.create method.
*/

/*** CHALLENGE 6 ***/

function personFromConstructor(name, age) {
    // add code here
    const person4 = new PersonConstructor()
    person4.name = name;
    person4.age = age;
    return person4;
}

const mike = personFromConstructor('Mike', 30);


// /********* Uncomment these lines to test your work! *********/
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'

/*
Challenge 7
Without editing the code you've already written, 
add an introduce method to the PersonConstructor
 function that logs "Hi, my name is [name]".
*/
PersonConstructor.prototype.introduce = function () {
    console.log(`Hi, my name is ${this.name}`)
}

mike.introduce();

/*
Using ES6 Classes
Challenge 8
Create a class PersonClass. 
PersonClass should have a constructor 
that is passed an input of name and saves it 
to a property by the same name.
 PersonClass should also have a method called greet 
 that logs the string 'hello'.
*/

/*** CHALLENGE 8 ***/

class PersonClass {
    constructor(name, age) {
        // add code here
        this.name = name;
        this.age = age
    }
    greet() {
        console.log("hello")
    }
}

// /********* Uncomment this line to test your work! *********/
const george = new PersonClass;
george.greet(); // -> Logs 'hello'

/*
Challenge 9
Create a class DeveloperClass
 that creates objects by extending the PersonClass class. 
 In addition to having a name property and greet method,
  DeveloperClass should have an introduce method.
   When called, 
   introduce should log the string 'Hello World, my name is [name]'.
*/

class DeveloperClass extends PersonClass {
    introduce() {
        console.log(`Hello World, my name is ${this.name}`)
    }
}

const thai = new DeveloperClass('Thai', 32);
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/*
Challenge 10
Create an object adminFunctionStore
 that has access to all methods in the userFunctionStore object,
  without copying them over individually.
*/

const userFunctionStore = {
    sayType: function () {
        console.log("I am a " + this.type);
    }
}

function userFactory(name, score) {
    let user = Object.create(userFunctionStore);
    user.type = "User";
    user.name = name;
    user.score = score;
    return user;
}

/*** CHALLENGE 10 ***/

const adminFunctionStore = Object.create(userFunctionStore)

/*Challenge 11
Create an adminFactory function that creates an object
 with all the same data fields (and default values) 
 as objects of the userFactory class, 
 but without copying each data field individually.

 Challenge 12
Then make sure the value of the 'type' field for adminFactory
 objects is 'Admin' instead of 'User'.

 Challenge 13
Make sure that adminFactory objects have access
 to adminFunctionStore methods, without copying them over.

 Challenge 14
Created a method called sharePublicMessage
 that logs 'Welcome users!' and will be available to adminFactory objects,
  but not userFactory objects. 
  Do not add this method directly in the adminFactory function.

*/

/*** CHALLENGE 11, 12, 13 ***/

function adminFactory(name, score) {
    // add code here
    const admin = Object.assign({}, userFunctionStore)

    return admin
}
adminFunctionStore.type = "Admin"

userFunctionStore.sharePublicMessage = function () {
    console.log("Welcome users!");
};

/*
Mixins are a tool in object-oriented programming
 that allows objects to be given methods and properties
  beyond those provided by their inheritance. 
  For this challenge, complete the missing code,
   giving all of the robotMixin properties to robotFido. 
   Do this in a single line of code, without adding 
   the properties individually.
*/

class Dog {
    constructor() {
        this.legs = 4;
    }
    speak() {
        console.log('Woof!');
    }
}

const robotMixin = {
    skin: 'metal',
    speak: function () { console.log(`I have ${this.legs} legs and am made of ${this.skin}`) },
}

let robotFido = new Dog();

robotFido = Object.assign(robotFido, robotMixin)

// /********* Uncomment to test your work! *********/
robotFido.speak() // -> Logs "I am made of metal"