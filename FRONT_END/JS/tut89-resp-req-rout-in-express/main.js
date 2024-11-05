const express = require('express')
const blog=require('./routes/blog')
// /blog  bata suru huney endpoint lai arkai file ma handle garya xam so tesko lagi const blog ho..yesto garda code organice hunxa...ani teslai import garesi use garna chai use app.use('/blog',blog)
const app = express()
const port = 3000
app.use(express.static("public"))
app.use('/blog',blog)
app.get('/', (req, res) => {
    console.log("Hey its a  get request on /")
    res.send('Hello World! from main endpoint /')
})
app.get('/about', (req, res) => {
    res.send('Hello about World!')
})

// hamiley yiniharlai chain ni garnma milxa as below...teso garda app.lekhi ranu pardaina...ani tesari chain chai eutai endpoint ko xa bhnye garna milxa
app.post('/', (req, res) => {
    console.log("Hey its a post request from /")
    res.send('Hello World! post!')
}).put('/', (req, res) => {
    console.log("Hey its a put request from /")
    res.send('Hello World! put!')
})
app.get("/index",(req, res) => {
    console.log("Hey its index file")
    res.sendFile('template/index.html',{root:__dirname})
})
app.get("/api",(req, res) => {
    console.log("Hey its api")
    res.json({a:1,b:2,c:"Nabin"})
})


// hamiley post request test garna lai public ma page.html banayera tynha script lekhera garya thm whihc aint good practice..So we will use postMan
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})