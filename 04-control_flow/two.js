const coding = ['Python', 'Java', 'JS', 'Ruby', 'C++']

coding.forEach( (item) => {    
    console.log(item);
    // return item   // foreach loop doesn't return anything
} )

// const myNums = [1, 3, 4, 5, 6, 7, 8, 9]

// const myNum = myNums.filter( (nums)=> (nums > 4) )
// console.log(myNum);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.map( (nums)=> nums + 10 )

const newNums = myNums.map((nums)=> ( nums * 10 )).map(( nums )=> ( nums + 1 )).filter(( nums )=>( nums > 50 ))    // Chaining 
console.log(newNums);

const NumsNew = [1, 2, 3, 4]
const NumsRes = NumsNew.reduce( (acc, curval) => {    // accumulator + current value
    console.log(`acc: ${acc} and current value: ${curval}`);
    return acc + curval
}, 0 )  // initial value 
console.log(NumsRes);

