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
console.log(regularuser.fullname)