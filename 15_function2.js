// ... rest operator when we do not know number of parameters
function calpriceofcart(...num1)
{
    return num1
}
console.log(calpriceofcart(4,5,200,800)) // it returns array 

//passing object into function
const user={
    user:"avender sharma",
    price:"500"
}

function objecthandle(anyobject)
{
    console.log(`username is ${anyobject.user} and price is ${user.price}` )
}

objecthandle(user)
 
// we can directly pass object

objecthandle({
    user:"rohit",
    price:"5999"
})

//passing array to function
 const newarray=[1,2,3,4,5,7,8]
function handlearray(array){
    return array[1]
}
console.log(handlearray(newarray))