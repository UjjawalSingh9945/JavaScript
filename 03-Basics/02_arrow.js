const user = {
    userName: "Ramesh",
    price: 230,
    welcomeMessage: function() {
        console.log(`Hi ${this.userName}, it will cost you ${this.price} dollar`);   //this keyword -- current context
        console.log(this);
    }
}
user.welcomeMessage()
user.userName = "Sam"
user.welcomeMessage()
console.log(this);

function testThisInFunc() {
    let userName = "Hello"
    console.log(this.userName);
}
testThisInFunc()   // this can't access the userName variable

const testThisInFunc1  = () => {   //arrow function
    let userName = "Hello"
    console.log(this.userName);
}
testThisInFunc1()   // this can't access the userName variable

const sumNum  = (num1, num2) => {
    return num1 + num2;
}
console.log(sumNum(4,6));

const sumNum2  = (num1, num2) => num1 + num2;   //implicit return

console.log(sumNum2(4,6));

