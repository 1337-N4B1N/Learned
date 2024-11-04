// let obj={
//     Name:"nabin",
//     uni:"Ku"
// }
// console.log(obj)
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key,element)
//     }
// }
// let animal={
//     eats:true
// };
// let rabbit={
//     jumps:true
// };

// rabbit.__protp__=animal; //Sets rabbit.[[Prototype]]=animal

class Animal{
    constructor(name){
        this.name=name;
        console.log("object is created")

    }
    eats(){
        console.log("khadai xu yrr")

    }
    jumps(){
        console.log("I am jumpig jack")
    }

}
let a=new Animal("horaa");
console.log(a);

class Lion extends Animal{
    constructor(name){
        super(name)
        this.name=name;
        console.log("object is created and it is a lion")

    }
    eats(){
        super.eats()
        console.log("roaring plus eating ")
    }
    // here eats is overriden

}
let l=new Lion("shershaa")
console.log(l)