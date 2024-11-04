// console.log("Hello world!");
let age=0;
let grace=3;
if(age-grace>18){
    console.log("You can drink");
}
else if(age==0){
    console.log("rehney deybhai ")
}
else{
    console.log("You cannot drink because  ");
    console.log("your age is just " +age);
}
console.log("THe square of your age is "+age**2)
console.log("THe division of your age  by grace is "+age/grace)
// === is used to compare using both value and data type
let n=3;
let m="3";
if(n==m){
    console.log("true");
}
else
{
    console.log("false");
}
if(n===m)
    {
        console.log("true")

    }
else{
    console.log("false")
}
let a=15;
let b=9;
c=a>b?(a-b):(b-a)
console.log(c)