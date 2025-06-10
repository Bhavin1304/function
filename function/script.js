//  wap to create a function to generate table of user given number.


// let x=prompt(("enter the value"))

// {
//     for(let i=1; i<=10;i++){
//       document.writeln(x+"*"+i+"="+(x*i))

//     document.writeln("<br>")}
// }

// wap to print a 1 to n table using a function

let n= prompt("enter the value")
function printtable(n)

    {
        for(let i=1; i<=n;i++){
         for(let j=1; j<=10;j++){
            document.writeln(i+"*"+j+"="+(j*i));
            document.writeln("<br>")
        }
    
        }
    }

printtable(n)

