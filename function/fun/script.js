// wap to find factorial using recursion.

// let i=1
// let n=5
//     function fun(n) {
//         if (n === 1){
//         return 1;
//         // return n;
//         }
//         else{
//         return n*fun(n-1);
        
//         }
//     }
    
    

// document.writeln(fun(5));

// wap to find sum of n using recursion.

function sum(n){
    if(n==1){
        return 1;
    }
    else{
        return n+sum(n-1)
    }
}
document.writeln(sum(5))