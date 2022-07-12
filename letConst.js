const object={startTime:10,endTime:20,getTime(){
    console.log(this);
}};
const object1={startTime:10,endTime:20, getTime:()=>{
    console.log(this);
}};

object.endGame=function(){
    console.log("khel katham , dukaan bandh");
}
// const does not mean that we cannot change the data . we can change the data but 
// the reference should not be changed and it is block scoped. block means a group 
// of statements together. normally we represent block using {}

object.getTime()
object1.getTime()
let a=100;
a=200;
console.log(a);

// let and var are variables whose reference can be changed but let has block scope and var 
// has global scope







