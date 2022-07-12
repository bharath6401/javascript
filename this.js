// this key word
// functions in js 
// 1. normal functions 
// 2.constructor functions
// 3.Arrow functions
// 4.factory functions

// 1.normal functions 

function normalFun(){
    console.log("inside normal function",this);//here this represents window object.
    //initially this and window are same in the global scope
}
console.log(this)// here also we get global object as this is equal to window 
this.normalFun() // we can even access function like this 
window.normalFun()// both this and window are same .

normalFun()
// 2.constructor functions: any function which returns an object when called with
// new keyword . follows camelCase
// 1. creates an empty object 
// 2. assaigns this to that object 

function ConstructorFunWatch(time){
    this.time=time;
    this.getTime=()=>{
        console.log("inside constructor function method",this);  //in constructor function the whole function creates
        // an empty object and assaigns this to it. now when we call this here 
        // we get the same object . wheather we use normal function or constructor function.
        
    }
}
// console.log(constructorFunWatch(10));
const timeObj=new ConstructorFunWatch(10);
timeObj.getTime();

// 3. Arrow function
const arrowFun=()=>{
    console.log("inside arrow function",this)
}
arrowFun()

// 4.factory funtion : any function which returns an object when called is a factory fun 
// follows camelCase
function factoryFunctionBottle(price,quantity){
    return({price,quantity,getQuatity:()=>{
        console.log(this)
    }})
}
const bottleObj=factoryFunctionBottle(100,1);
bottleObj.getQuatity()


const object={color:"yellow",getColor:function(){
    console.log(this);// this inside object refers to the object which called the function
}}
object.getColor()

// this inside arrow functions
const arrowFun1=()=>{
    console.log("inside Arrow function",this)//this inside arrow function refers to the
    // content in which the arrow function is defined. here it is window object
}
arrowFun1()

const ArrowFunObj={
    num:10,
    arrow:()=>{
        console.log(this)//arrow function here is defined only when it is called .
        // so, its global object context
    }
}
ArrowFunObj.arrow()

const ArrowFunObj1={
    num:10,
    arrow:function(){
        // this is the context in which the code is defined
        console.log("inside object method",this);
        (()=>{
        console.log(this)//Arrow function inherit the context in which the code is 
        // defined . 
    })();
}}
ArrowFunObj1.arrow()



const arrowFun2=()=>{
    console.log(this)
    // the arrow function inherits the this from the context it is defined
    const arrowTest1=()=>{
        console.log("Arrow fun inside another Arrow Fun",this)
        
    };arrowTest1();
};arrowFun2();














