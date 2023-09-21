function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0){
      return false;
    }
   
  }
  
  return true;
}
console.log(isPrime(4));



/*The function isPrime takes in a number num as an argument and checks if it's a prime number.

The function first checks if num is less than or equal to 1. If it is, then it's not prime (since the definition of prime starts with 2 as the smallest prime), so the function returns false.

If num is greater than 1, the function checks if it's divisible by any integer between 2 and num - 1. If it is, then it's not prime, so the function returns false.

If the function gets through the loop without finding any divisors of num, then it must be prime, so the function returns true.

For the specific input isPrime(4), the function will return false since 4 is not a prime number (it's divisible by 2).*/