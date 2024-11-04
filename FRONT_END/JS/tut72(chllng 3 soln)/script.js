console.log("Script.js initializing")
// let boxes=document.getElementsByClassName("box")
// both are same
let boxes=document.querySelector(".container").children
console.log(boxes)
function getRandomColor(){
    let val1=Math.ceil(0+Math.random()*255)
    let val2=Math.ceil(0+Math.random()*255)
    let val3=Math.ceil(0+Math.random()*255)
    return `rgb(${val1},${val2},${val3})`
}
Array.from(boxes).forEach(e=>
    {
        console.log(e)
        e.style.backgroundColor=getRandomColor()
    }
)
// math.ceil(x) garo ani x chai eg 4.22 xa bhnye this will return 5
