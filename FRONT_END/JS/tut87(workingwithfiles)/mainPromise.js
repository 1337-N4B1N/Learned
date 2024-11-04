// import fs from "fs"

// fs.readFile("notes.txt",(err,data)=>{
//     console.log(data.toString())
// })
import fs from "fs/promises"

let a=await fs.readFile("notes.txt")
let b=await fs.appendFile("notes.txt","\n\nHe is also skinny")
console.log(a.toString())