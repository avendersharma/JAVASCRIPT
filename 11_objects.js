// object literals

const mysymbol=Symbol("key1")
const jsuser={
    "full name":"avender sharma",
    age:20,
    location:"hissar",
    email:"avendersharma1981@gamil.com",
    isloggedin:false,
    lastlogindays:["monday","tuesday"],
    

    //symbol interview important

    [mysymbol]:"key1"  //m if we give lke this mysymbol:key1 then we use typeof it gives string
}

// accessing objects
console.log(jsuser.age)
console.log(jsuser["email"])
console.log(jsuser["full name"])

console.log(jsuser[mysymbol])

jsuser.email="avendersharma862@gamil.com"

// freeze is usesd for not changing values
// Object.freeze(jsuser)

console.log(jsuser)


//function
jsuser.greeting=function()
{
    console.log("hello!!!");
}


console.log(jsuser.greeting)  // [Function (anonymous)]
console.log(jsuser.greeting()) //hello!!!  undefined



jsuser.greetingtwo=function()
{   
    //string interpolation
    console.log(`hello js user,${this.name}`);
}
console.log(jsuser.greetingtwo())

