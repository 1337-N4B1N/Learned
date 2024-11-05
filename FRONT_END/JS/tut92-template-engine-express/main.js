const express = require('express')
const app = express()
const port = 3000


// https://github.com/mde/ejs/wiki/Using-EJS-with-Express documentation for ejs with express
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    let siteName="adidas"
    let searchText="Search Now"
    let arr=[1,54,65]
 res.render("index",{siteName:siteName,searchText:searchText,arr})
})
app.get('/blog/:slug', (req, res) => {
    let blogTitle="KU why and when?"
    let blogContent=" It is a good university"
 res.render("blogpost",{blogTitle:blogTitle,blogContent:blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})