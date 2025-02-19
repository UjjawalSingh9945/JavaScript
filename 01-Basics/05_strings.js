const name = "hello"
const age = 23

console.log(`My name is ${name} and age is ${age}`);    // string interpolation

const gameName = new String('cartoon-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   world    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com/google%20asdasd"

console.log(url.replace('%20', '-'))

console.log(url.includes('gle'))

console.log(gameName.split('-'));
