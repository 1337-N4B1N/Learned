let a=7
let b=5
// factorial using reduce
function factorial(number)
{
  let arr=  Array.from(Array(number+1).keys())
  console.log(arr.slice(1))
 let c= arr.slice(1).reduce((a,b)=>{
    return a*b;
  })
  return c
}
//  let c= arr.slice(1).reduce((a,b)=> a*b)
//   console.log(c)
// }
// Yesari directly ni lekhna milxa mathiko function lai

function fact(number){
    let fac=1
for(let i=1;i<=number;i++)
{
    fac=fac*i;
}
return fac;
}
// factorial using for loop
console.log(factorial(b))
console.log(fact(b))
