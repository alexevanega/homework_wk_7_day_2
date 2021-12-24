//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
};

const fav_foods = (person) => {
    for (let [key,value] of Object.entries(person)) {
        if (typeof(value) == "string") {console.log(`My favorite type of ${key} is ${value}`)}
        else {for (let v of Object.values(value)){
            if(typeof(v)=='string'){console.log(`My favorite type of ${key} is ${v}`)}
            else {for (let [kv,v2] of Object.entries(v)) {console.log(`My favorite type of ${kv + " " + key} is ${v2}`)}}
            }
        }
    }
};

fav_foods(person3);

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name
    this.age = age

// Use an arrow to create the printInfo method

    this.printInfo = () => {console.log(`This is ${this.name}. They are ${this.age} years old.`)}

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age

    this.addAge = (years) =>{
        this.age += years;
        return this.age
    }
};
const Cory = new Person('Cory', 25)
const Kathryn = new Person('Kathryn', 30)
console.log(`${Cory.name + ": " + Cory.age}`)
console.log(`${Kathryn.name + ": " + Kathryn.age}`)
Cory.addAge(3)
console.log(`${Cory.name + ": " + Cory.age}`)

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isBigWord = (string)=>{
    return new Promise((resolve,reject)=>{
        if(string.length>=10) {
            resolve('Big Word')
        } else if (string.length<10) {
            reject('Small Word')
        }
    })
};

isBigWord('12345678912')
.then((result)=>{console.log(result)})
.catch((error)=>{console.log(error)})
isBigWord('and')
.then((result)=>{console.log(result)})
.catch((error)=>{console.log(error)})