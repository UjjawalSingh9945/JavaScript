function myName() {
    console.log("R");
    console.log("a");
    console.log("m");
    console.log("e");
    console.log("s");
    console.log("h");
}
// myName()

function sumNum(num1, num2) {    // parameter
    console.log(num1 + num2);
}

function sumNum2(num1, num2) {    // parameter
    let result = num1 + num2
    return result
}
const result = sumNum2(2,8)
// console.log("Result: ", result);


sumNum(3, 4)    // arguments

function userLoginMessage(username) {
    return `${username} is logged in`
}
// console.log(userLoginMessage("Ramesh"));

function userCartPrice(...num1) {     // rest operator -- for multiple parameters
    return num1
}
console.log(userCartPrice(2,4,6));

const user = {
    name: "Hello",
    price: 230
}
function userDetail(anyObject) {
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}
userDetail(user)

