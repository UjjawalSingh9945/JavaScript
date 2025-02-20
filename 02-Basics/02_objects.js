// singleton

//object literals

const mySym = Symbol("key1")
const jsUser = {
    name: "hello",
    "full name": "world",    // to access these type of object we use square bracket method
    age: 19,
    location: "Delhi",
    email: "email@google.com",
    isLoggedin: false,
    [mySym]: "key2"        // defining symbol in object -- interview
}
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

jsUser.age = 28
// Object.freeze(jsUser)
jsUser.age = 50
// console.log(jsUser);
jsUser.greetings = function(){
    console.log(`hello JS user ${this["full name"]}`);
}
// console.log(jsUser.greetings());

const regularUser = {
    email: "google@gmail.com",
    fullname: {
        userfullName: {
            firstName: "Ramesh",
            lastName: "Suresh"
        }
    },
    age: 23,
}
// console.log(regularUser.fullname.userfullName.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {...obj1, ...obj2}
const obj4 = Object.assign({}, obj2, obj1)    // first element is target and other are source
// console.log(obj3);
// console.log(obj4);

// Destructuring

const course = {
    courseName: "JavaScript",
    coursePrice: 300,
    courseInstructor: "Ramesh"
}
const {courseInstructor: instructor} = course
console.log(instructor);




