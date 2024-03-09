//stack=>primitive uses stack

// heap->  non primitive uses heap

// stack(call by value)

let name="avender sharma"
let anothername= name
console.log("before changing another name:");
console.log(name)
console.log(anothername)

anothername="rohit sharma"

console.log("after changing another name:");
console.log(name)
console.log(anothername)

// heap(callby reference)

let user1=
{
  useranme:"avender",
  email:"avendersharama1981@gmail.com",
  upi:"avendersharam1981@oksbi"
}
let user2=user1
{
   user2.email="avendersharma862@gmail.com"
}

console.log(user1.email);
console.log(user2.email);