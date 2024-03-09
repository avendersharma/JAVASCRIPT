// datatype types on the basis of how data is stored in memory and how it can be acesses

// primitive:call by value
 
// 7 types :string ,number, boolean, null, undefined, symbol, bigint


//non primitive (call by refernce):

// array, object ,functions
const score=100
const scorevalue=100.5
const temp=null

const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id);
console.log(anotherid);

console.log(id==anotherid)
// array
const heros=["shaktiman","nagraj"]

//object
let myobj={
    name:"avender",
    age:22,
}

const myFunction=function()
{
    console.log("hello world");
}

// typeof function
console.log(typeof(temp))  //null ak type object aata hain


console.log(typeof(myFunction));  //function