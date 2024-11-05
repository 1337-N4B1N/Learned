
const express = require('express');
const { MongoClient } = require('mongodb')
const cors=require('cors')
const dotenv = require('dotenv')
dotenv.config()

const bodyparser = require('body-parser')

// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = "PassOP"

const app = express()
const port = 3000

app.use(bodyparser.json())
app.use(cors())
//Get all the passwords
client.connect();
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords')
    const findResult = await collection.find({}).toArray();
    res.json(findResult)
})
// Save a password
app.post('/', async (req, res) => {
    const password=req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords')
    const findResult = await collection.insertOne(password);
    res.send({success:true,result:findResult})
})
// Delete a passwordby id
app.delete('/', async (req, res) => {
    const password=req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords')
    const findResult = await collection.deleteOne(password);
    res.send({success:true,result:findResult})
})
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})