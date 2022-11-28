// Find the given number is prime or not


const isPrime = (n)=>{
    if(n < 2){
        return false
    }
    for(let i = 2; i<= Math.sqrt(n); i++){
        if(n%i === 0){
            return false
        }
    }
    return true
}


if(isPrime(4))
    console.log("prime number");
else
    console.log("not a prime number");

