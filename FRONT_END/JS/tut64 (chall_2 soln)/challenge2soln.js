 // Create a business name generator by combining list of adjectives and shop name and another Word 
 
// Adjectives:
// crazy 
// amazing
// fire 

// Shop Name:
//  Engine
//  Foods
//  Garments

//  Another Word:
  
//  Bros 
//  Limited 
//  Hub

//  Dont use arrays -->
// Objects to store lists of words
const adjectives = {
    0: "crazy",
    1: "amazing",
    2: "fire"
  };
  
  const shopNames = {
    0: "Engine",
    1: "Foods",
    2: "Garments"
  };
  
  const anotherWords = {
    0: "Bros",
    1: "Limited",
    2: "Hub"
  };
  
  // Function to generate a random index
  function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
  }
  
  // Function to generate a random business name
  function generateBusinessName() {
    const adjIndex = getRandomIndex(3); // 3 adjectives
    const shopIndex = getRandomIndex(3); // 3 shop names
    const anotherIndex = getRandomIndex(3); // 3 other words
  
    const businessName = `${adjectives[adjIndex]} ${shopNames[shopIndex]} ${anotherWords[anotherIndex]}`;
    return businessName;
  }
  
  // Generate and display a random business name
  const businessName = generateBusinessName();
  console.log("Your new business name is:", businessName);
  