
const express = require('express')
const blog=require("./routes/blog")
const app = express()
const port = 3000
const fs=require("fs")

// app.use(express.static("public"))
app.use('/blog',blog)
// Middleware 1 -Logger for our application
app.use((req,res,next)=>{
    
    console.log(req.headers)
    req.me="I am Nabin";
    fs.appendFileSync("logs.txt",`${Date.now()} is a  ${req.method} \n`)
    console.log(`${Date.now()} is a  ${req.method}`)
    next()
})
// MiddleWare 2
app.use((req,res,next)=>{
    console.log('M2')
    next()
})
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/contact', (req, res) => {
    res.send('Hello my contacts World!')
})
app.get('/about', (req, res) => {
    res.send('Hello about World! '+req.me)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
