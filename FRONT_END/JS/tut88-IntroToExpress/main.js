const express = require('express')
const app = express()
const port = 3000


// hamiley yai folder bhitra kunai text file banaim ani url ma //**.txt garera file access garna sakdainam...testo garna lai public name garya  folder banayera tes  bhitra tyo txt  file lai  rakhnye ani main.js ma yo talaka ko code implement garney
// yo tala ko app.use(express.static("public")) tei notes.txt acces garna use garni ho
app.use(express.static('public'))




app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello from about World! ')
})
app.get('/contact', (req, res) => {
  res.send('Hello my  World! I mean my contacts')
})
app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from the db

    // for localhost:3000/blog/itahari?mode=dark&region=np
    console.log(req.params)  //will ouotput slug:itahari
    console.log(req.query)  //will output mode:dark region:np
    // if we wanna have like /blog/travel/itahari than we use as below tesko lagi mathi :/slug/:second garnu parxa

// res.send(`Hello World! of blogs.This is from ${req.params.slug} and ${req.params.second}`)
  res.send(`Hello World! of blogs.Welcome to ${req.params.slug}`)
 
})

// app.get('/blog/intro-to-cyber-security', (req, res) => {
//     // logic to fetch intro to cybersecurity from the db
//   res.send('Dont Forget DOnt forgive Be legion Expect us')
// })

// yesari every end point ko lagi lekhna thalda in big projects it will consume a lot of time and code wont be readable easily...for that we do as app.get('/blog/:slug'...) which we have done above
// app.get('/blog/intro-to-cryptography', (req, res) => {
//     // logic to fetch intro to cybersecurity from the db
//   res.send('Lets encrypt in a way no one can decrypt')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})