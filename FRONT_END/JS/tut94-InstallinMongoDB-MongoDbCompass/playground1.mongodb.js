use('LearningDatabase')

// Insert a few documents into the course collection.
db.getCollection('course').insertMany(
    [
        {
          
          "name": "Javascript",
          "Price": 0,
          "Instructor": "CodeWithHarry"
        },
        {
          
          "name": "Python",
          "Price": 15,
          "Instructor": "TechWithTim"
        },
        {
         
          "name": "Java",
          "Price": 25,
          "Instructor": "JavaMaster"
        },
        {
          
          "name": "Ruby",
          "Price": 20,
          "Instructor": "RubyGuru"
        },
        {
        
          "name": "C++",
          "Price": 30,
          "Instructor": "CppChampion"
        },
        {
          
          "name": "PHP",
          "Price": 10,
          "Instructor": "PHPPro"
        }
      ]
      
        
      
);

console.log("done inseting Data")