
// Overview: The purpose of this function is to take the letters in a given string and shift the value of the letters; either to the right if positive or to the left if negative. (Example: 'Zoo Keeper' would be 'Bqq Mggrgt'). If a letter is capitalized we want to keep it capitalized. We will exclude non letters. 

function caesarCipher (str, num) {
    
// In a scenario in which our number is greater than 26 by a large amount, like 300, we want to use a modulus operator. This will take the remainder of the number if it goes beyind 26. 
  num = num % 26;

// We want to start out by making our string lower case. We do this below.
  var lowerCaseString = str.toLowerCase();
    
// Now we want to split the letters into an array.
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    

// In the for loop below we are creating a new string variable to . It will be an empty string to start with. 
  var newString = '';
// We will loop through every character in our string with a for loop. When i is less than the lowerCaseString length we want to increase by 1 at every iteration.   
  for (var i = 0; i <lowerCaseString.length; i++) {
      
// The first thing we will want to do is find the current letter. We will use the lowerCaseString variable at posiition i.    
    var currentLetter = lowerCaseString[i];
// If the current character is a space then we will use this if statement to address. We want to add it to the string with no change at all. Then we want to move on to the nest iteration. 
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }
      
// Now we want to determine where our current letter is in our alphabet array. We use the indesxOf function to determine this and we put it in the variable currentIndex.
    var currentIndex = alphabet.indexOf(currentLetter);
      
// Now we want to adjust the index based on the 'num' input.       
    var newIndex = currentIndex + num;

// Lets say our currentLetter is z and our number is 5. This would take us beyond the 26 letters of the alphabet. This code below will bring us to the begining of the alphabet if we go beyond the last character in the index. 
    if (newIndex > 25) newIndex = newIndex - 26;
      
// We also need to make sure that the we address if a 'num' with a negative value takes the index to less than 0. In this case we add 26 to bring it back around to the other side of the alphabet. 
    if (newIndex < 0) newIndex = 26 + newIndex;

// What we want is to make sure that any upper case letters remain uppercase after the new index kicks in. To do this, we make an if statement to see if the letter is uppercase at the begining. If so, we make it upper case in the newString. 
      
// So if the string is originally uppercase.....
    if (str[i] === str[i].toUpperCase()) {

// We will make sure that it is uppercase in the string that we output.         
      newString += alphabet[newIndex].toUpperCase();
    }
      
// The new string is equal to the alphabet at our new index.       
    else newString += alphabet[newIndex];
  }
  
  return newString;
  
}

caesarCipher('Zoo Keeper', 2);

// This is based on lessons 17-20 of 'Learning Algorithms in JavaScript from Scratch' by Eric Traub