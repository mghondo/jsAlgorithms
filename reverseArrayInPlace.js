// Overview: This function will take an array as a parameter. It will reverse the array and return to us the reversed array. We will be manipulating the array that is passed in. Therefore, we will not be returning a new array. We will accomplish this with the use of a temporary variable. 

function reverseArrayInPlace(arr) {
    
// the first thing that we will be doing is writing out a loop to iterate each elem,ent in the array. So i starts our at 0, which is the first index in the array. it goes to half of the lenght of the entire array, during which it increments by +1. 
  for (var i = 0; i < arr.length / 2; i++) {
      
// We now want to switch the first element of our array with the last element of our array. As well, we want to switch the second element of our array with the second to last element in our array. And so on. 
      
// We will do this with a temporary variable. The temporary variable below will define the 'arr' at a given position in the array. In the first posistion, for example, i would be 0. 
    var tempVar = arr[i];
      
// We now want to make the first element in the array equal to the last element in the array.  the " - i" is what takes us to the specific i that is the couterpart to the arr[i].
    arr[i] = arr[arr.length - 1 - i];
      
// Now we want to re-write the counterpart. We will therefore look for arr at the location of the counter part, which is [arr.length - 1 - i]. 
    arr[arr.length - 1 - i] = tempVar;

// We only want this to take place for the first half of the array. Otherwise, we would get the same array returned that we put in. For this reason, on row 6, arr.legnth is divided by 2. 
  }

// As stipulated, we only want to return the same inoput that was put in. 
  return arr;
}

// Test with this Code here. 
reverseArrayInPlace([1, 2, 3, 4, 5, 6]);

// This is based on lessons 25-28 of 'Learning Algorithms in JavaScript from Scratch' by Eric Traub