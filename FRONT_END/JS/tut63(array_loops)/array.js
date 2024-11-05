let arr=[1,3,5,7,9]
console.log(arr)
console.log(arr.length)
arr[3]=28
console.log(arr[3])
console.log(arr)
// string ma string_name[0]=xyz garera chnge garepani paxi string print garda kei chnge bhaa hunna...tara arrray ma bhnye chnge hunxa..

console.log(arr.toString())
console.log(arr.join("and "))
console.log(arr.pop())
arr.push("nabin")
console.log(arr)
console.log(arr.shift())
// pop returns last element and shift returns first
// push adds element at last and unshift add at first
arr.unshift("nirmal")
console.log(arr)
delete arr[4]
console.log(arr)
console.log(arr.length)
console.log(arr[4])

let arr2=[8,6,2,4,0]
console.log(arr.concat(arr2))
console.log(arr.concat(arr2).length)
console.log(arr2.sort())
console.log(arr2)
console.log(arr2.splice(1,3,33,44))
console.log(arr2)
console.log(arr.reverse())

