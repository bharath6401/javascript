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
