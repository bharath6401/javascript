// closure
// function with its lexical scope bundled together is called a closure

function x(){
    var num=10;
    function y(){
        console.log(num);
    }
    return(y)//whole function
}
var z=x();//y function is returned here along with its lexical score which has num=10
z()//here 


// applications of closures:
// module design pattern
// currying
// functions like once
// memoize
// maintaining state in async world
// setTimeouts
// iterators and many more...


// print the numbers from 1 to 5 after every second without using let 

for(var i=1;i<=5;i++){
    
    function close(x){//here x referes to the different memory than i
    // so, we dont get the same value. we get different values . if we put the setTimeout
    // outside the close function then output would be all 6's cause i is defined with var 
    // which has the same reference. id we use let then the block scope would make it 
    // refer to different values

        setTimeout(function(){
            console.log(x);
        },1000*i);
    }close(i)
}
// whole loop runs ar once and all the function calls are put in a stack
