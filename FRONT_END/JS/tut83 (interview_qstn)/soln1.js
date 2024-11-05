// write a program that create a magical sorting hat for a waizard school using JS fxn that takes an array of student names and assigns them to one of the four houses based on the length of their names
let students=["nabin","ankit","sandesh","prakash","gautam","suman","bikal","imran","saugat","om","sneha","shreya","parijat","dikshya","ram"]
let houses=[]
for(const student of students)
{
    if(student.length<4)
    {
        houses.push("green")
    }
    else if(student.length<6)
    {
        houses.push("yellow")
    }
    else
    {
        houses.push("red")
    }
}
console.log(houses)

// make a fxn that doubles each element in an array.However there's a catch, if the array contains consecutive duplicate elements,only double of one of them

function doubleElements(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) {
            // If the current element is the same as the previous one, skip doubling
            result.push(arr[i]);
        } else {
            // Otherwise, double the element
            result.push(arr[i] * 2);
        }
    }
    return result;
}

let arr = [1, 1, 43, 5, 6, 3, 56, 8, 9, 0, 3];
let doubledArr = doubleElements(arr);
console.log(doubledArr);
// write a fxn that reverses the string and appendt the reversed string to itself

function reverse(original)
{
    let reversed=original
for(let i=original.length-1;i>=0;i--)
{
reversed+=original[i]
}

return reversed;
}

let string ="Nabin"

console.log(reverse(string))
// 

let a=prompt("enter your name")
console.log("Hello"+a)
