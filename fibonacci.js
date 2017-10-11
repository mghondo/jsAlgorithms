
// OVERVIEW: This function using the Fibonacci Sequence. The Fibonacci Sequence is a psecial set of numbers in which each number is the sum of the two numbers before it. 

// The Fibonacci Sequence begins as follows:

// 1, 1, 2, 3, 5, 8. 13. 21. 34. 55. 89. 144....

// The function takes in one parameter (position) which will be the position in the array index. With the posiition in the array, the function will return the value of the number at that specific index. 

// With a position of 4, as an example, the number that will be returned will be 3. 

// This function will use recursion in which the function will run a version of itself until the correct value os achieved. 

function fibonacci(position) {
    
// Our base case will be the first two positions, which we know are '1'. 
  if (position < 3) return 1;
    
// In all other cases, we will run the Fibonacci Sequence function until it reaches the base case, in which both previous numbers are 1 and 1. Then the recursive case will unwind until we reach the position that we originally passed in. 
    
  else return fibonacci(position - 1) + fibonacci(position - 2);
}
 
// A test run.
fibonacci(6);

// This is based on lessons 43-46 of 'Learning Algorithms in JavaScript from Scratch' by Eric Traub.