// Immediately Invoked Function Expression (IIFE) -- to avoid global scope pollution we use IIFE

(function testIIFE() {
    console.log(`DB Connected`)
})();  // execution call..... to end to execution we need semicolon


((name)=> {
    console.log(`Arrow call ${name}`);
})("running");