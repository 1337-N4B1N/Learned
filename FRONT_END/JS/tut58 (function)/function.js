console.log("This tutorial is about function")
function nice(name) {
    console.log("Hey "+ name+" you  are nice guy!")
    console.log("Hey "+ name+" you seem honest to me!")
    console.log("Hey "+ name+" Have a good day")
}
nice("Nabin");

function sum(a,b)
{
    console.log(a+b)

}
function sum(a,b)
{
    // console.log(a+b)
return a+b;
}

sum(5,7)
result=sum(7,5)
console.log("the sum of 7 and 5 is " + result)
// below is arrow function
const func1= (x)=>{
    console.log("I am an arrow function",x)
}
func1(34);
func1(66);
func1(84);