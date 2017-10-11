
// OVERVIEW: This algorithm takes in two paramters. The first one is an array of numbers called numArray. The second is a single number called sum. The function will find and display all paris of number in the numArray that add up to the sum parameter. 

// There are a few guildelines that we want when putting this together:
// 1. First, the Result should be an array or arrays. 
// 2. Second, any number in the array can be used in multiple pairs. 

// We will use and hash table in accordance with O (n) time complexity. 

function twoSum(numArray, sum) {
    
// The first thing that we want to do is define an array to put all of our paired arrays. It will be empty to start.
  var pairs = [];

//To be in accordance with the O(n) time complexity, we want to create another empty array to hold each number that we iterate. 
  var hashTable = [];
    
// Now we want to loop through our number array to get access to every number in it. So we start and the index of 0 and move up the index until we get to the end (i < numArray.length;)    
  for (var i = 0; i < numArray.length; i++) {

// Inside our for loop we will define a variable to contain our current number. 
    var currNum = numArray[i];

// Now we want to define the number that the current number needs to be equal to the sum. to do this we simply take the sum and subtract the current number. We are calling this variable 'counterpart'.
    var counterpart = sum - currNum;
      
// Now we want to see if the if the counterpart exists in the array. 
    if (hashTable.indexOf(counterpart) !== -1) {
        
// If the counterpart does in fact exist, then we want to push the current number and it's counter part into the pairs array. 
      pairs.push([ currNum, counterpart ]);
    }
      
// Now we want to push our current number into our hash table. This is regardless of whether it's counterpart exists in the array or not. 
    hashTable.push(currNum);
  }
  
  return pairs;
}

// An example to test. 
twoSum([1, 6, 4, 5, 3, 3], 7);

// This is based on lessons 34-37 of 'Learning Algorithms in JavaScript from Scratch' by Eric Traub.