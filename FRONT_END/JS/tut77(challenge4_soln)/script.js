// function createCard(title,channelname,no_of_views,months_old,duration,thumbnail){
//     // input ma 727000 bhye it shall be 727k 
//     createCard("#1 Introduction to js","#2 bostonAxademy","#3 56000(it shall be shown as 56k)","7(months)","31:33","thumbnail_link")
//     }


 function createCard(title,cname,views,months_old,duration,thumbnail){
    // Finish this function
    let viewStr
    if(views<1000)
        {
            viewStr=views;
        }
    else if(views<1000000 ){
        viewStr=views/1000 + "K";
    }
    else if(views>1000000){
        viewStr=views/1000000 + "M"
    }
    else{
     viewStr=views/1000 + "K"

    }

    let html= ` <div class="card">
    <div class="image">
        <img src=${thumbnail} alt="" srcset="">
        <div class="capsule">${duration}</div>

    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cname}. ${viewStr} views . ${months_old} months ago </p>

    </div>
</div> `

document.querySelector(".container").innerHTML= document.querySelector(".container").innerHTML + html
 }

 createCard(" Intro to CyberSecurity | H4CK_H3R  Course-Tutorial#3","H4ckWithN4bin",770000,7,"21:28","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
 createCard(" Intro to OSI MODEL | H4CK_H3R  Course-Tutorial#4","H4ckWithN4bin",700,3,"59:28","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
 