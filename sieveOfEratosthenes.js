// OVERVIEW: The purpose of this algorithm is to find all of the prime numbers up to a given number. These prime numbers will be returned in an array. 

// There are many ways to acheive this, but one of the most optimal is the Sieve of Eratosheness. 

// We are going to use the indexes of the array as the given number and we are going to make every element of the array a value of true. Once this is done, we will go through every number and mark every non prime number as false. 

// So any multiple of a number cannot be prime. Therefore, we will start with 2 and any multiples of 2 will be false. Then onto 4, and 6 and so on. 

// Our array will be from 0 to n. 
function sieveOfEratosthenes(n) {
    
// Empty array in which to push all primes that we have once the function runs. 
  var primes = [];
    
// Moving one at a time up the index of the array. 
  for (var i = 0; i <= n; i++) {

// All numbers will start as prime until we prive that they are not. 
    primes[i] = true;
  }
  
// We are going to mark 0 and 1 as false automatically, 
  primes[0] = false;
  primes[1] = false;
  
// One important aspect of the efficiency of this function is that we will stop running the for loop when we get to the sqaure root of n. All non prime numbers after the square root of n will be marked as false by the time we get to the square root of n. So there is no point in continuing our loop. We will start this for loop at 2. 
  for (var i = 2; i <= Math.sqrt(n); i++) {
      
// Any i time j is going to be a multiple. So this is going to be key in determining a non prime number. 
    for (j = 2; i * j <= n; j++) {

// So all numbers with i * j are therefore false. s
      primes[i * j] = false;
    }
  }

// Now we are going to return all of the prime numbers that are still true. we will push all of these true values into another array called result. 
  var result = [];
    
// Incrementing along the array to the end of the array's length. 
  for (var i = 0; i < primes.length; i++) {

// If it is prime, then we will push it into the result array. 
    if (primes[i]) result.push(i);
  }

// Now we return the result. 
  return result;
}
 
// An example to try. 
sieveOfEratosthenes(49);

// This is based on 'Learning Algorithms in JavaScript from Scratch' by Eric Traub.