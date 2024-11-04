// Generate a dummy data  in this format in a collection called Employees in a db called company


// {
// name:" ",    //all these shall be random like salary lang city etc
// salary:450000,
// language: "Python",
// city:"NewYork",
// isManager:true


// }
// genereate 10 such records when a button called generate data is clicked.

// create an express app with mongoose to acheive it
// Everytime the button is clicked,you should clear the collection
const express = require('express')
const mongoose = require('mongoose');
const Employee = require("./models/Employee")
mongoose.connect('mongodb://127.0.0.1:27017/company');
const app = express()

const port = 3000
app.set('view engine', 'ejs')

const getRandom = (arr) => {
  let randno = Math.floor(Math.random() * (arr.length - 1))
  return arr[randno]
}
app.get('/', (req, res) => {
  res.render('index', { foo: 'FOO' })
})
app.get('/generate', async (req, res) => {
  // Clear the collection Employee
 await  Employee.deleteMany({})
  // Generate random data
  let randomNames = ["nabin", "prakash", "suman", "gautam", "sujal", "ankit"]
  let randomLang = ["C", "C++", "Python", "Js", "Java", "Go"]
  let randomCities = ["itahar", "dhangadhi", "butwal", "dharan", "chitwan"]
  for (let index = 0; index < 10; index++) {
    let e = await Employee.create({

      name: getRandom(randomNames),
      salary: Math.floor(Math.random() * 22000),
      language: getRandom(randomLang),
      city: getRandom(randomCities),
      isManager: (Math.random() > 0.5) ? true : false


    })
    console.log(e)
  }
  res.render('index', { foo: 'FOO' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})