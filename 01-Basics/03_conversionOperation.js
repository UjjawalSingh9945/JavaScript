let score = "33"

// console.log(typeof(score));
let scoreNum = Number(score)
// console.log(typeof(scoreNum));


// "33" => 33
// "33abc" => NaN
//true => 1  false => 0
// undefined => NaN

let boolVal = ""
let boolCheck = Boolean(boolVal)
// console.log(typeof(boolCheck));
// console.log(boolCheck);

// "" => false
// "hello" => true

// ****************operations****************

let str1 = "hello"
let str2 = " world"
let str3 = str1 + str2
console.log(str3);
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2); // output: 122
console.log(1 + 2 + "2"); // output: 32
console.log(1 + 4 + "2" + 2 + 3); // output: 5223

