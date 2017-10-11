
// Overview: the purpose of this functin is to test whether a given string is a Palindrome. To confirm, a Palindrome is a word, phrase, or sequence that reads the same backward as forward. 

function isPalindrome(string) {
    
// First we need to convert every letter into a lower case version of itself. 
  string = string.toLowerCase();

// Next we want to run the string into an array of characters. 
  var charactersArr = string.split('');
    
// We want to disregard any character that isn't a letter. We will do this by creating another variable with all of the letters of the alphabet and incorporating the split function. 
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
// Both of these variable we split with simply a '' with no space. So the 'characterArr variable addresses ALL of the characters in the sting. The validCharacters addresses only the characters that we want, which are only valid lower case letters.    

 
//Here we are defining the letters array that only the letters from the string go into. 
  var lettersArr = [];
    
// We want to strip out any character in our array that isn't a letter. We will do this with a forEach loop.
  charactersArr.forEach(char => {
      
// We are only pushing letters forward that are within the array of letters that we want. based on the validCharacters variable, anything that is not a letter is -1 on the array spectrum and we will reject it. (Example: 'a' would be 0 and 'c' would be 2. A ',' would be -1.)
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });
  
    
// Now we want to use the join() function to join all of our valid characters, being lower case letters, together. If these joined characters are the same if they are joined in reverse, then this is in fact a Palindrome. 
  if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
  else return false;
}
 
// The string below should return true. 
isPalindrome("Madam, I'm Adam");


// This is based on lessons 13-16 of 'Learning Algorithms in JavaScript from Scratch' by Eric Traub