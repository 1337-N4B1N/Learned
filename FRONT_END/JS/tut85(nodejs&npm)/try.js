console.log("hello node!")
var slugify=require('slugify')
let a=slugify('some string')   //some string
//if you prefer something other than '-' as separator
const b=slugify('some string','_') 
console.log(a)
console.log(b)
console.log(b)
