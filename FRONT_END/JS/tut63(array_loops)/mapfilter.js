let arr=[1,2,3,5,7,9,11,13]
// let newArr=[]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
//     console.log(element)
// }
// console.log(newArr)

// We can do all the above in single 

let newArr=arr.map((e,index,array)=>{
    return e**2
})
console.log(newArr)
// const greaterThanFive = (e)=>{
//     if(e>5){
//         return true
//     }
//     else
//     {
//         return false
//     }
// }
// console.log(arr.filter(greaterThanFive))
console.log(arr.filter((e)=>{
    if(e>5){
                return true
             }
             else
             {
                return false
            }
}))

let arr2=[1,2,3,4,5,6]
const red=(a,b)=>{
    return a*b
}
console.log(arr2.reduce(red))

console.log(Array.from("Nabin"))