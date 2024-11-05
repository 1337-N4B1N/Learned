// All the mouse events:: https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
let button=document.getElementById("btn")
console.log(button.innerHTML)
button.addEventListener("dblclick",()=>{
    // alert("I was clicked")
    document.querySelector(".box").innerHTML="<b>YOU were clicked</b> Enjo your click"
})
// button.addEventListener("mouseover",()=>{
//     // alert("I was clicked")
//     document.querySelector(".box").innerHTML="<b>YOU were clicked</b> Enjo your click"
// })
button.addEventListener("contextmenu",()=>{
    alert("Don't heck me by clicking right..HHHH")
    
})


button.addEventListener("keydown",(e)=>{
console.log(e)    
})
// if i want it to capture keystrokes anytime not just when clikced on that button I will have to do it as document.addEventListener
document.addEventListener("keydown",(e)=>{
console.log(e.key)    
})