 document.querySelector(".box").innerHTML
//  the command in line one shows the conent of box..yesma chai box ko bhitra matra dekhauxa
document.querySelector(".box")
// This even show <div class="box"> which isnt shown by line 1
document.querySelector(".box").innerText
// YESLEY CHAI HTML dekhauxa
// console.log(document.querySelector(".box").innerText)
document.querySelector(".box").outerHTML
// innerHTML ley chai tyo class ko bhitra ko HTML matra dekhauxa bhnye outerHTML ley chai tyo class ko html ni dekhauxa
document.querySelector("body").outerHTML
// Hamle body ma garda chai . nadera direct "body" matra lekhxam hai
document.querySelector(".box").tagName
// tagName ley chai k ho bhenra return garxa in this case(yei folder ma bhako html consdider garda) it will return DIV as box is div
document.querySelector(".box").nodeName
// tagname only applicable for element and tagname is applicable for all 
document.querySelector(".container").textContent
// nodeChild ma whitespace or say space/gapping lai text bhenra dekhauxa bhnye element garda dekhaunna

// Similary innerText garda tyo space haru remove garera text matra aauxa bhnye textContent garda tyo spacing lai /n ley denote gardo raixa

document.querySelector(".box2").hidden
// box2 hidden xa ki nai check garxa..in our case it will show false

document.querySelector(".box2").hidden=true
// yo garesi chai box2 aba hidden hunxa
// yedi hidden xa bhnye teslai false  garera un hidden pani banauna milxa
document.querySelector(".box").innerHTML="Hey me Nabin"
// yesari html change ni garna sakinxa..yesla first element whose class is box ko innerHTML chnage gardinxa
document.querySelector(".box").hasAttribute("style")
// hamle kunai ma styling deko xam ki nai bhnera yo bata check hanna milxa
document.querySelector(".box").getAttribute("style")
// styling k gareko xa bhnera chai yesari check garna milxa hai

// yedi inline css na garera internal css(tyo head ma style{   
//  .box{display:flex;}
// }  
// yesari css deko xa bhnye feri hasAttribute ley false dekhaudo rahexa
document.querySelector(".box").setAttribute("style", "display:inline")
// yesari css or say styling ni change garna milxa
document.querySelector(".box").attributes
// yesley sabai attributes dinxa.

document.querySelector(".box").removeAttribute("style")
// It will remove style attribute from box
document.querySelector(".box").dataset
// data-createdby="Nabin" yesaro store gareko data dekhauna use garinxa
document.querySelector(".box").remove()
// yesley first box lai udaiddinxa 
// feri chalayo bhnye tyo first ko element udxa ani second ko element first banya hunxa ra tyo ni udxa
document.querySelector(".container").classList
// tyo element ma use bhaako classlist ko name haru dinxa like bgaqua in this case 
// we can also add classList by document.querySelector(".container").classList.add("Mafia") we can also remove them by similar way but using classList.remove
document.querySelector(".container").classList.toggle("red")
// toggle ley on xa bhnye off garxa ani off xa bhnye on garxa