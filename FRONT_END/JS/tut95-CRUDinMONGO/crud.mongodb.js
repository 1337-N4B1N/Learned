// C-create
// R-Read
// U-Updata
// D-Delete

// CRUD OPEARTION
use("CrudDb")
console.log(db)
// CREATE
db.createCollection("courses")
// INSERT
db.courses.insertOne({
    name:"Haryy",
    price:0,
    instructor:"Code with Harry",
    platform:"youtube"
})
//INSERT MANY
/*db.courses.insertMany(

    [
        {
            "name": "JavaScript Basics",
            "price": 0,
            "instructor": "FreeCodeCamp",
            "platform": "YouTube"
        },
        {
            "name": "HTML & CSS",
            "price": 0,
            "instructor": "Traversy Media",
            "platform": "YouTube"
        },
        {
            "name": "React for Beginners",
            "price": 0,
            "instructor": "Academind",
            "platform": "YouTube"
        },
        {
            "name": "Node.js Crash Course",
            "price": 0,
            "instructor": "The Net Ninja",
            "platform": "YouTube"
        },
        {
            "name": "Python Programming",
            "price": 0,
            "instructor": "Corey Schafer",
            "platform": "YouTube"
        },
        {
            "name": "Django Tutorial",
            "price": 0,
            "instructor": "Programming with Mosh",
            "platform": "YouTube"
        },
        {
            "name": "Java Full Course",
            "price": 0,
            "instructor": "CodeWithMosh",
            "platform": "YouTube"
        },
        {
            "name": "C++ Tutorial",
            "price": 0,
            "instructor": "freeCodeCamp.org",
            "platform": "YouTube"
        },
        {
            "name": "SQL Basics",
            "price": 0,
            "instructor": "Tech With Tim",
            "platform": "YouTube"
        },
        {
            "name": "Data Structures & Algorithms",
            "price": 0,
            "instructor": "Kunal Kushwaha",
            "platform": "YouTube"
        }
    ]
    
)
*/


// READ
let a=db.courses.find({price:0})
console.log(a.toArray())
console.log(a.count())  //kati ota element (data j bhnxan) xa bhnera dekhauxa
let b=db.courses.findOne({price:0})
console.log(b)
// UPDATE
db.courses.updateOne({price:0},{$set:{price:100}})

db.courses.updateMany({price:0},{$set:{price:100}})

// DELETE
db.courses.deleteOne({price:100})  //TO delete one
db.courses.deleteMany({price:100})   //To delete many