
//array
const myarray=[1, 2,3,"avender"]
console.log(myarray[0])

// we can also declare array from by creating object
const array2=new Array(1,2,3,"sharma")
console.log(array2)

//array methods

// array2.push(6,8)
// console.log(array2)

// array2.pop()

// array2.unshift(9)    //insert element at front
// console.log(array2)

// array2.shift()       //remove element from front
// console.log(array2)

// console.log(array2.includes(2))

// const newarray=array2.join()  //converts array into string

// console.log(typeof newarray)
// console.log(typeof array2)


//slice, splice

console.log("A",myarray);
const myn1=myarray.slice(1,3)

console.log(myn1)
console.log("B",myarray)

const myn2=myarray.splice(1,3)   //start,deletecount
console.log(myn2)               //splice also include 3 and 
                               //  splice also manipulate original array Work
                              //  as call by reference 
                                          

console.log("c",myarray)
console.log(myn2);
