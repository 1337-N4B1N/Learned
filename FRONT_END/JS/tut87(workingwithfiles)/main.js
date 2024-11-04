// fs.writeFileSync is synchronous(file na lekhi arko talako code execute hunna) so we prefer fs.writeFile over fs.writeFileSync
const fs=require("fs")

// console.log(fs)
console.log("starting")
// fs.writeFileSync("notes.txt","Nabin is a lazy boy")
fs.writeFile("notes.txt","Nabin is a lazy boy",()=>{
    console.log("done")
    fs.readFile("notes.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})
fs.appendFile("notes.txt"," Nabin is crazy ",(e,d)=>{
console.log("Hello"+d)
})