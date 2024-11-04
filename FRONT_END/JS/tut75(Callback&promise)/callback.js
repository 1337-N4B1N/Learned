console.log("Welcome juniors")
console.log("Welcome junior fellas")
setTimeout(() => {
    console.log("How was the welcome")
}, 3000);
setTimeout(() => {
    console.log("How was the welcome second delay")
}, 2000);
console.log("Did you guys enjoyed")

// what we assume is first welcome junior fellas how was the welcome did you guys enjoyed...But k hnxa bhnye tyo setTimeout bhitra ko paxi execute hnxa..so it will be something will be something like welcome junior fellas Did you guys enjoyed How was the welcome no matter time delay kati rakya xa
const fn=()=>{
console.log("this is inside fn")
}
const callback=(arg,fn)=>{
console.log(arg)
fn()
}
const loadScript=(src,callback)=>{
   let sc= document.createElement("script")
   sc.src=src;
   sc.onload=callback("elliot which is inside of callback",fn)
 document.head.append(sc)
   }
   
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js" ,callback)

// const callback=(arg,fn)=>{
//     console.log(arg)
//     fn()
//     }

//     const loadScript=(src,callback)=>{
//        let sc= document.createElement("script")
//        sc.src=src;
//        sc.onload=callback("elliot")
//      document.head.append(sc)
//        }

// yesma callback fxn bhitra ni arko callback fxn xa.yestai dherai bhayo bhnye its callled callback hell as code is too complicated so for that we use promises