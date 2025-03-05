const promiseOne = new Promise(function(resolve, reject) {
    // Do async task
        // DB calls, cryptography, network
    setTimeout(function(){
        resolve()
        console.log("async task is complete");
        
    }, 1000)
})
promiseOne.then(function(){
    console.log("promise consumed");
    
})
new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("async task task two");
        resolve()
    }, 2000);
}).then(()=> {
    console.log("async 2 resolved");
    
})
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({name: "Ujju", degree: "BTECH"})
    }, 3000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({name: "Ramu", degree: "BSc"})
        }
        else{
            reject('Error...')
        }
    }, 4000)
})
promiseFour.then(function(data){
    console.log(data);
    return data.name
}).then((username)=> {              // Chaining concept
    console.log(username);
    
}).catch(function(error){           // handling reject
    console.log(error);
}).finally(()=> {console.log("the promise is either resolved or rejected");
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({name: "Ujjawal", car: "Mercedes"})
        }
        else{
            reject('error... pls check')
        }
    }, 5000)
})
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


// const datauser = setTimeout(function(){
//     async function userData() {
//         try {
//             const data = await fetch('https://jsonplaceholder.org/users')
//             const response = await data.json()
//             console.log(response);
//         } catch (error) {
//             console.log('async error');
            
//         }
//     }
//     userData()
// },6000)


    fetch('https://api.github.com/users/hiteshchoudhary')
    .then((res)=> {
        return res.json()
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=> {
        console.log(error);
    })



