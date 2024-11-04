// let a=prompt("Enter first number")
//  let b=prompt("Enter second number")
//  let sum=a+b;
//  console.log("The sum is",sum)
//  alert('The sum is'+ sum)
//  alert(`The sum is ${sum}`)
// mathi ko case ma a ra b as a string linxa eg a=4 and b=5 than a+b=45 dinxa instead of 9...coz + ley yanha string concat garney kaam garxa
// let a=Number(prompt("Enter first number"))
//  let b=Number(prompt("Enter second number"))
//  let sum=a+b;
//  console.log("The sum is",sum)
//  alert('The sum is' + sum)
//  This will not do string concatenate and instead will give correct answer

let a=prompt("enter first number")
let b=prompt("enter second number")
let x=5
if(isNaN(a) || isNaN(b))
    {
        throw SyntaxError("Sorry this is not allowed")
    }

let sum=parseInt(a)+parseInt(b)
// yesari parseInt garo bhnye it will be converted to number
// console.log("the sum is",sum)
// alert('the sum is '+ sum)
function main(){
try{

alert('the sum is '+ sum)
console.log("the sum is",sum)
return true;
}
catch(error){
    console.log("error aaidyo yrr")
    return false;
}
finally{
    console.log("files are being closed and db connection is being closed")
}

}
main()
// hamle mathikp try throw ma kei return na garda finally statement use na gareni teti farak pardaina...but as we are returning so we need to use finally statement...or else tyo files are being closed wala chaldaina ....this is because programs run on the way that return garesi terminate fxn