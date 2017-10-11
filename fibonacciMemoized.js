// OVERVIEW: We want to calculate our Fibonacci Sequence again with a twist. Refer to the fibonacci.js to see the first way in which it was calculated. The previous algorithm was calculated expoentially. 

// With this modified function, we want to speed up the process by avoiding redundant calculations. To do this, we will incorporate the principles of memoization. Specifically, we will create a cache to store all previously ran calculations. As we get into the recusive case(s), 
// 1.) If the number is in the cache, then we will use it. 
// 2.) If it isn't in the cache, then we calculate it and store it in the cache. 


// We have two parameters. The first is the index. we put in a number and from there the function will calculate. As seen at the bottom of this file, the cache is meant to be empty when running this function. The pertinent data will be put into the cache as it runs recursively. 
function fibMemo(index, cache) {
    
// This is the cache in which we will store all previous calculations. It either equals the cache that is passed in, OR it equals the array that we are generating recursively. This cache is central to the concept of memoization. 
  cache = cache || [];

// The first calculation that we want to do is to see if the calculation that we are about to do is already in our cache. 
  if (cache[index]) return cache[index];
  else {

// We address the base case just as before. The first two indexes are 1. Therefore our base case simply returns 1. 
    if (index < 3) return 1;
      
// In our recursive case, we run the function with the two values that are behind the current index. One important note is that we are not returning anything froom this, we are simply calculating. 
    else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }
    
// Lastly we return the cache once all of the necessary calculations have ran for the given index. 
  return cache[index];
}
 
// A test run.
fibMemo(500);

// This is based on lessons 47-50 of 'Learning Algorithms in JavaScript from Scratch' by Eric Traub.