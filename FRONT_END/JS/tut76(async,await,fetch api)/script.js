// async function getData(){
//     // simulating getting data from server
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(455)
//         },3000)
//     })



// settle means resolve or reject 
// resolve means promise has setttled successfully
// reject meas promise has not settled succesfully
async function getData(){
    // simulating getting data from server
    let x= await fetch('https://jsonplaceholder.typicode.com/posts',{
         method:'POST',
        body: JSON.stringify({
            title:'foo',
            body:'bar',
            userId:1,

    }),
    headers:{
        'Content-type': 'application/json; carset=UTF-8',
    },

    })
    let data=await x.json()
    console.log(data)

    
}
// await lai async ko bhitra matra use garna milxa
    // Now as I have used async and await load data samma aauxa ani ekxin wait garxa,,455 print hanesi baaki jhyammai print handinxa
async function main(){
console.log("Loading modules")
console.log("DOing something else")
console.log("Load data")
let data= await getData()
console.log(data)
console.log("process data  modules")
console.log("task2")
}
main()

// ailey console check garda kheri  console.log(data) ko part ma pending dekhauxa tara tyo bhnda talako execute bhai sakeko hunxa..We can also do that by code below data.then wala....but testo garnu bhnda await async use garnu parxa. as it is good and clean practice to wait for data..If we want ki jaba samma getData bata data aaisakdaina taba samma a tyo process data modules print na hos..then we shall use await & async
// data.then((v)=>{
//     console.log(data)
//     console.log("process data  modules")
//     console.log("task2")
    

// })


// .then use garnu ko sattt use async and await