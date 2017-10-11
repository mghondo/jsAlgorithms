// OVERVIEW: This function takes an array as the sole parameter. The function takes all of the numbers in the array and returns the array in the order of ascending numbers from left to right. 

// The function loops through the array from left to right. It looks at each number as it compares to the number next to it. If the numbers are not ordered from least to greatest, then the function will re arrange the numbers. Then it will move to the next two numbers to the right. the function will continue until all of the numbers are in ascending order. 

// The amount of times that function passes through the array is the length of the array - 1. During the first loop through the array, the number that ends up furthest to the right is the greatest number. The next loop will do the same for the second to last number, and so on. 



function bubbleSort(array) {
    
// We will have two loops, one nested inside of the other. Our outer loop dictates how many times we want to do what is inside the inner for loop. Specifically, we want to do this 'array.length - 1' times.  
    
// This is how we dictate array.length-1. 
    for (var i = array.length; i > 0; i--) {
        
// Our inner loop is where we will manage the sorting of each pari of numbers. We will create a new variable called j that will go left to right through the array for as long as it's less than i. This allows us to stop the loop one less each time. 
      for (var j = 0; j < i; j++) {

// Now the last thing to do is to build functionality to switch neigboring numbers if the one on the left is greater than the one on the right. 
          
// If the first number is greater than the number to it's right, then we will switch the order. 
        if (array[j] > array[j + 1]) {
            
// To make the switch we will create this temporary variable. 
          var temp = array[j];
            
// Now we will change the location of this temporary variable by adding 1 to j. 
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }

// Last thing to do is return our array here. 
    return array;
}

// Test case to try. 
bubbleSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 9, 1]);

// This is based on 'Learning Algorithms in JavaScript from Scratch' by Eric Traub.