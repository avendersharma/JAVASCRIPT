// singleton
// dono same hain bas pahle wala singelton hain aur doosra nahi
//const tinderuser= new Object()

const tinderuser={ }

tinderuser.id="123abc"
tinderuser.name="avender"
tinderuser.isloggedin=false

// console.log(tinderuser);

const regularuser=
{
    email:"avendersharma1981@gmail.com",
    fullname:
    {
        userfullname:
        {
            firstname:"avender",
            lastname:"sharma"
        }
    }
}
console.log(regularuser)
console.log(regularuser.fullname.userfullname.firstname)

//for concatinating objects
const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}
const obj3=Object.assign({},obj1,obj2)
console.log(obj3)

// spread for concatinating
const obj4={...obj1,...obj2}
console.log(obj4)

// in databases we get array of objects
const obj =[
    {
        1:"a",
        2:"b",
        33:"c"
    },

    {
        4:"d",
        "avender":"sharma"
    }
]

// accesing array of objects
console.log(obj[1]["avender"])
// when we want all keys of object then object.keys() will return an array of keys
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))

