const arr1 = [0, 1, 2, 3, 4, 5]

const arr2 = ["hello", "world"]

const arr3 = new Array(1,2,3,4,5)

// console.log(arr1[2]);
// console.log(arr1.push(8));
// console.log(arr1);

console.log(arr1.slice(1,3));  // it doesn't changes the original array and it doesn't includes last element in this case it will not include index 3 
console.log("A", arr1);

console.log(arr1.splice(1,3));   // it changes the original array and also includes index 1 to 3 
console.log("B", arr1);

const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const newArrhero = marvel_heros.concat(dc_heros)
// console.log(newArrhero)

const newHeroList = [...marvel_heros, ...dc_heros]
console.log(newHeroList)

const newarrFlat = [1, 2, 4, [4, 5, 6, [4, 8, 9]]]
console.log(newarrFlat.flat(2));


console.log(Array.from({name: "Hello"}))    //interview ques

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));


