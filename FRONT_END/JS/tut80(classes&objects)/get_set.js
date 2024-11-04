class User{
constructor(name){
    // Invokes the setter
    this.name=name
}
get name(){
    console.log(this._name);
    
    return this._name
}
set name(value){
    if(value.length<4)
        {
            alert("Name is too short")

            return;
        }
        this._name=value

}
}
let user=new User("john")
alert(user.name);
user=new User("")