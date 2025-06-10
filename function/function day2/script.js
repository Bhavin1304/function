// wap to check whether the passed number in UDF is Prime or not.
// let num=prompt("enter the value")
// function isPrime(num){
//     if(num<=1)
//     for(let i=1; i<=a; i++){
//         if(num % i === 0) return false;
//     }
//     return true;
// }
// let number= 29
// if ( isPrime(num)){
//     document.writeln(" is a prime number.");
// }else
// {
//     document.writeln(" is a not prime number.")
// }














let num= prompt("enter the value")
function isPrime(num) {
    // Check if num is less than or equal to 1
    if (num <= 1) return false;
  
    // Check for divisibility from 2 up to the square root of num
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
  
    // If no divisors found, num is prime
    return true;
  }
  
  // Example usage:
  const number = 29;
  if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
  } else {
    console.log(`${number} is not a prime number.`);
  }