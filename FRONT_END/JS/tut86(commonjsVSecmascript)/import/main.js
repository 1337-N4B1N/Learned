// const { createServer } = require('node:http');
// const fs=require("fs")
// mathi hamley require use garera library/module import garya xam which is fine when in our package.json type:module xaina..but when we do type:module in package.json we do it import packages using import as we did in react..ani module ma change garesi tyo tala createServer agadi http. ni add garna na birsinu hai.

import http from "http";
import fs from "fs";
import {a} from "./export(import).js"
import b from "./export(import).js"
console.log(b)
const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World<h1> ');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
