function mergeSort (arr) {   
// If the formula only has 0 or 1 elements, then it is already sorted. Therefore, we simply return arr as is.
    if (arr.length < 2) return arr;
    
// Now we need to define the middle index. If necessary we will round down if the array has an odd amount of numbers. 
    var middleIndex = Math.floor(arr.length / 2);
    
// We will now define variables for both halves of this array. The first half is from 0 to the middle index. 
    var firstHalf = arr.slice(0, middleIndex);
    
// The second half starts at the middle index and continues to the end of the array. We do not need to put in a second paramter because it goes until the array stops. 
    var secondHalf = arr.slice(middleIndex);

// We will be using recursion to divide all of the arrays until the length is less than two, then we will use our merge function below to put everything in a proper order. 
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}
 
function merge (array1, array2) { 
// the first thing that we want to do is define our final array that we will return. 
    var result = [];
    while (array1.length && array2.length) {
// We are creating a variable before the if statement. It will be used to describe the minimum element out of the two arrays. 
      var minElem;
// If array1 at index 0 is less than array2 at 0, then array one is the minimum element. 
      if (array1[0] < array2[0]) minElem = array1.shift();
        
// Otherwise the minimum element is array 2.         
      else minElem = array2.shift();
        
// And we will push the minimum element, be it array 1 or 2, into the result array. 
      result.push(minElem);
    }
 
// If there is any length to array 1, then we will add whatever is in array 1 to the end of the result array. This connects the two arrays and makes a new combined array. 
    if (array1.length) result = result.concat(array1);
    
// Otherwise it is array 2 that has length and we will we will add, or concat, array 2 to result instead. 
    else result =result.concat(array2);
    
// Now we will return the result. 
    return result;
}
 
mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]);

// This is based on 'Learning Algorithms in JavaScript from Scratch' by Eric Traub.