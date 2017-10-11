// Overview: This algorithm takes in a numbered array as a parameter. It will return to us the mean, median and mode of the array. We will take into account various scenarios; multiple modes, medians with even numbered arrays, and mode in which each number is equally represented. 

// To build this algorithm we will make 4 functions. The mean, median and mode will each have a their own individual function. Lastly, we will have a function that returns the value of each of these three functions. 

// Separating key components of an algorithm into separate functions is a key component to functional programming. This enables the programmer to not have to continuosly be re-writing code in multiple situations. 

// We will start by writing out the main function that will return the values of the mean, median and mode functions. 
function meanMedianMode(array) {
  return {
      
// Here we are just returning a the values created from the other three functions with a desciption of each value. 
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  }
}

// FUNCTION TO GET THE MEAN
 
    function getMean(array) {

    // To start with the mean function, we will create a variable of sum and start the value at zero. 
      var sum = 0;

    // We now want to loop through every number in our array and add it to the sum. So for each value in the array we will add it to the sum.     
      array.forEach(num => {
        sum += num;
      });

    // Now we will make variable called mean in which we will divide the sum by the lenth of the array.     
      var mean = sum / array.length;

    // Lastly we will return the value. 
      return mean;
    }

// FUNCTION TO GET THE MEDIAN

    // The objective of the median function is to get the middle element of the array after it have been sorted. If we have an even amount of number in our array, then we want to get the mean of the middle two numbers. 

    function getMedian(array) {

    // So the first thing that we need to do is sort our array. This function below sorts numbers in ascending order. We can do descending order as well. 
      array.sort(function(a, b){return a-b});

    // We now want to define a variable for our median. We will not give it a value at this time. We are simply declaring it before the if statement that follows.  
      var median;

    // There are two scenarios that we want to be prepared for. This first is if the length of the array is an odd number. The second is if it's an even number. If it's an even number then we need to divide the middle two values by two. We will differentiate between these two scenarios with an if statement. 

    // The first part of the if statement is the odd number length scenario. The if parameter specifically says "if the array length divided by 2 DOESN'T produce a remainder of zero."  
      if (array.length % 2 !== 0) {

    // If it's not divisible by 2 then we want to grab the middle element.m We do this with a (array.length /2) wrapped in a Math.floor (which will round it down). 
        median = array[Math.floor(array.length / 2)];
      }

    // Now we will deal with the even number length scenario. 
      else {

    // In this scenario we have two middle elements. One is the array length just like the one above. The other is the array length minus 1. 
        var mid1 = array[(array.length / 2) - 1];
        var mid2 = array[array.length / 2];

    // Now we will calculate the mean between these two variables. This will be our median variable. 
        median = (mid1 + mid2) / 2;
      }

    // After the if statement we will return the median variable. 
      return median;
    }

// FUNCTION TO GET THE MODE

    // The mode is what number(s) appear the most frequently in our array. We assume that we can have an infinite amount of modes in our array and will produce the function accordingly. 

    // We will return the mode(s) in the form of an array. 

    function getMode(array) {

    // We will use an object as a hash table. This will start as an empty variable that we will the values and their frequencies into. 
      var modeObj = {};

    // We want to move through every element in our array with a forEach loop. 
      array.forEach(num => {

    // For any value that is not in the modeObj array, we will give it an index of 0. Then we will add and index of 1. 
        if (!modeObj[num]) modeObj[num] = 0;
        modeObj[num]++;
      });

    // Now we will loop to find which number or numbers appears the most frequently. We will do this with a for loop. 

    // Before the for loop we want to declare the, we want to declare a variable that keeps track of the masx frequency between the variables. 
      var maxFrequency = 0;

    // We also want to declare and array to put our modes in. it will be empty to start. 
      var modes = [];

    // This will give use access to every number property on our mode object. we will be checking to see if the frequency of the given number is greater than the max frequency declasred above. ...
      for (var num in modeObj) {

    // If the modeObj of the current number is greater than the max frequency.....
        if (modeObj[num] > maxFrequency) {

    // ....then we make the var modes into an array with our current number in it. 
          modes = [num];

    // We also want to make the max frequency into the frequency with our current number in it. 
          maxFrequency = modeObj[num];
        }

    // The last situation that we have to deal with is having more than one number with the max frequency. 

    // Therefor if the current number has a frequency that is equal to the max frequency already in place, then we push the number and it's frequency into the mdoes array. 
        else if (modeObj[num] === maxFrequency) modes.push(num);
      }

    // The last scenario that we will be preparing for is if each number in the array has the same frequency. In this case there would be no mode because there would be no max frequency. In this case we will just return an empty array. 

    // We will use Object.keys gives us the value of how many properties there are in the modeObj variable. 
      if (modes.length === Object.keys(modeObj).length) modes = [];
      return modes;
    }

// Sample to test.
meanMedianMode([9,10,23,10,23,9]);

// This is based on lessons 29-33 of 'Learning Algorithms in JavaScript from Scratch' by Eric Traub.