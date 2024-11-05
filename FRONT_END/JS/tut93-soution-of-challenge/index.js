// Create a Node.js program to clear clutter insider of a directory and organize the contents of that directory into different folders



// for exmple,these fies become:


// name.png
// name.jpg
// this.pdf 
// nabin.zip
// catch.txt
// cat.jpg
// this;

// jpg /name.jpg , jpg/cat.jpg
// png/ name.png
// zip/ nabin.zip
// txt/ catch.txt
// pdf/ this.pdf
import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basePath = path.join(process.env.HOME, 'Nabin/Programming/Learning/FRONT_END/JS/tut93-soution-of-challenge');
// console.log(fs)
let folder = await fs.readdir(basePath)

for (const file of folder) {
    console.log("running for "+file)
    let ext = file.split(".").pop()
  if( ext!="js" && ext!="json" && file.split(".").length>1)
  {
    if (fsn.existsSync(path.join(basePath,ext)) ) {
        // Move the file to this directory
       await fs.rename( path.join(basePath,file), path.join(basePath,ext,file))
    }
    else {

     await   fs.mkdir(path.join(basePath,ext))
     await fs.rename( path.join(basePath,file), path.join(basePath,ext,file))
    }
}
}