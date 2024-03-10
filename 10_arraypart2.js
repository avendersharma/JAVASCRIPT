const marvel=["thor","ironamn","spiderman"]
const dc=["superman","flash","batman"]

// marvel.push(dc)

// console.log(marvel)
// console.log(marvel[3][1])

// const all=marvel.concat(dc)
// console.log(all)

//spread for concat
const all=[...dc,...marvel]
console.log(all)

// flat
const arr=[1,2,3,[4,5,6],7,8,[10,12,47,5,2]]
const anotherarray=arr.flat(Infinity)
console.log(anotherarray)

// conversion into array

console.log(Array.from("avender sharma"))
console.log(Array.from({name:"avender"})) // intersting for interview

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))
