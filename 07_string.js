

const name="avender sharma"
const age=22


console.log("my name is "+ name+" and my age is "+age);
console.log(`my name is ${name}  and my age  is${age}`);

//string can also be declared as
const city=new String("hansi")

console.log(city)

//string methods

console.log(city[0])
console.log(name[0])

console.log(name.length)
console.log(name.toUpperCase())
console.log(name.charAt(2))
console.log(name.indexOf('a'))

//slicing
const newstring=name.substring(0,4)  // 4 si not included
console.log(newstring)

const another=name.slice(-6,4)
console.log(another)


const s1="   avender "
console.log(s1.trim())

const address="jaipur"
console.log(address.replace("j","r"))// original string remains same
console.log(address);
console.log(address.includes("jai"))


console.log(name.split(' '));
