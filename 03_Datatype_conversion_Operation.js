let score="33abc"
//js convert also convert that datatype in number that is not number like here
// 33abc  when we print valueinnumber it gives NaN

console.log(typeof(score))

let valueinnumber=Number(score)

console.log(typeof valueinnumber)
console.log(valueinnumber)

// "33"=>33
// "33abc"=>NaN
//  true=>1  false=>0

let isloggedin="avender"

let valueinboolean=Boolean(isloggedin)

console.log(valueinboolean)

// "avender"=> true
// 1=> true
// 0=>false
// ""=>false