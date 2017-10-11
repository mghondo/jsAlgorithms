// The purpose of this function is to take each word in a string and reverse the words. Each word will be in the same order as the original string. The only change will be that the words themselves will be out of order. 


function reverseWords(string) {

// First thing that we will do will be to create an separate array for each individual word. to do this will split the string with the split function and the indicator of the split will be a ' '.
  var wordsArr = string.split(' ');
    
// We now want to have an empty array to push all of our reversed words into after we have reversed.
  var reversedWordsArr = [];
    
// We now want to loop through each one of our words array, reverse the word, and push it into the new array. We will do this with a forEach loop.   
  wordsArr.forEach(word => {
// This will provide access to each word in the array. 
      
// We do not want to use the array reverse method to revers our words. Therefore we will loop through every letter in our word backwards instead of forwards. And we will add each letter to our new string. We will define and empty string through which we can make this happen. 
    var reversedWord = '';
      
// We will now reverse increment each word. We will start at the end of the word by typing 'word.legnth -1'. This will take us to the end of the. We will work backards by using 'i--'. the first character of the word is at the index of 0. 
    for (var i = word.length - 1; i >= 0; i--) {

// We will then add the current letter to our reversed word. 
      reversedWord += word[i];
    }
      
// We will now push this newly reversed word into the reversed words array like this. 
    reversedWordsArr.push(reversedWord);
  });
  
// We will now return the reversed words array with all words reversed, in order in which the words appear, with the join function with a ' ' in between each word. 
  return reversedWordsArr.join(' ');
}

// Here is one example
reverseWords('Hello There');

// This is based on lessons 21-24 of 'Learning Algorithms in JavaScript from Scratch' by Eric Traub