
async function sleep(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(45)
            
        },1000)
    })
}
function sum(a,b,c){
    return a+b+c


}



( async function main(){
    console.log(a1)
    let a=await sleep()
    console.log(a)
    let b=await sleep()
    console.log(b)
    // let x,y=[1,5]
    // console.log(x,y)
    // we dont get 1 and 5 in console in above code to get so we need to keep x and y in array
    
    // let [x,y]=[1,5]
    // console.log(x,y)
    // let [x,y,...next]=[1,5,7,8,9,0]
    // console.log(x,y,next)
    let obj={
        c:1,
        d:2,
        e:4
    }

let {d, e}=obj
console.log(d,e)

let arr=[1,4,6]
console.log(arr[0]+arr[1]+arr[2])
console.log(sum(arr[0],arr[1],arr[2]))
console.log(sum(...arr))
// ...arr is called spread operator
// let a1=5
var a1=6
//  yo case ma var a1 garda console ma undefined aauxa...testai let use garyo bhnye error...var  ley declaration top ma manxa bhnera bujhda hnxa though exactly yesari hudaina

})()

