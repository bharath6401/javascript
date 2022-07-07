
// function statement or function declaration
function a(){
    console.log("this is function declaration of statement");
}
// function expression
var a=function(){
    console.log("this is function expression ")
}
// named function expression

var a=function b(){
    console.log("this is named function expression ")
}
// anonymous functions 
function(){
     console.log("this is anonymous function. function without a name")
      console.log("anonymous function can be used as an argument or can be assaigned to a variable")
}
// self invoked functions

(function(){
    console.log("self invoking funtions call themselves")
})()
// first class functions or first class citizens
// the ability of js functions to be sent as an argument or parameters or can  be 
// returned from a function makes them first class functions or citizens

function firstClass(param1,param2){
    param1();
    return(param2);//function is returned as a value
}

var a=firstClass(function(){
    console.log("function as argument")
},function(){
     console.log("function as argument2")
})

///done

(function hello(){
    console.log("anonymous functions are functions which have no name")
    console.log("we cannot use a function which has no name from ECMA script but we can assain")
});

// the below anonymous function is invalid as it has no reference name 
// function(){}
 
(function(){
     console.log("this anonymous function is valid in self invocation functions");
     
 })();
// function statement or function declaration are same=>just a nomal function 
function funcitonStatementOrDeclaration(){
    console.log("this is funciton statement or function declaration");
}

// funciton expression a=bX+c here x is a function assaigned to a variable
var a=function(){
    console.log("this is a function expression");
}
a()
