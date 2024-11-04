console.log("Hello WOrld!")
let boxes=document.getElementsByClassName("box")
console.log(boxes)
boxes[4].style.backgroundColor="aqua"

document.getElementById("red-box").style.backgroundColor="red"
document.querySelector(".box").style.backgroundColor="green"
// This querySelector selects only the first box
// If we want to select all box we do as below 
console.log(document.querySelectorAll(".box"))

// document.querySelectorAll(".box").style.backgroundColor="pink"   This wont work coz html collection ko .style hudaina only particular element ko matra hnxa
// document.querySelectorAll(".box").forEach(e=>{
//     console.log(e)
//     e.style.backgroundColor="pink"
  

// })
// aba sabai pink
e=document.getElementsByTagName("div")
// e[3].matches("#red-box") if we type it in console it returns true for 23 and false for others
e[3].closest("#red-box")
document.querySelector(".container").contains(e[2])
// returns true as e2 is under container
document.querySelector(".container").contains(document.querySelector("body"))
// returns false as container is insider body not body inside contianer
document.querySelector("body").contains(document.querySelector(".container"))
// this returns true