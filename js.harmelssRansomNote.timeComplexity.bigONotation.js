// OVERVIEW: This function incorporates binanary search for the purpose of minimizing the run time to go through a data set. By halving the search, specifically using the concept of 'O(log N),' we see larger data sets having less effect on runtime that we would expect in exponential notation, such as in the case of 'O(n^2).'

//Function assumes no punctiuation.

function harmlessRansomNote (noteText, magazineText) {

//PART 1   
//we will be using the split function using one empty space as the separator making our string into substrings. we will do this for both parameters.     
  var noteArr = noteArr = noteText.split(' ');
  var magazineArr = magazineText.split(' ');
//Using a Hash Table Technique, we want to make each word and object.    
  var magazineObj ={};
  
//With each word as an object, we will increement each word giving it a number for each time that it is in the string.     
  magazineArr.forEach(word => {
// If a word is not present onthe magazine object, then we want to make it make it a property on the object and make it equal to 0. 
    if (!magazineObj[word]) magazineObj[word] = 0;
// And we want to increment everytime we see the word.       
    magazineObj[word]++;
  });
  
// If we type nothing of PART 2, we can test to make sure the function was counting each word from the magazine text. by outputting the magazineObj after running the harmlessRansomNote with a string in the magazineText input. We can leave the noteText empty. 
    // console.log(magazineObj);

    
// PART 2
    
// We will check each word to see if it is present in the magazineObj. If is is not that we will use a Boolean to confirm false. it will be true by default.     
  var noteIsPossible = true;
  noteArr.forEach(word => {
    if (magazineObj[word]){
// If the word exists then we increment the word negativley by 1
      magazineObj[word]--;
//If the word is present then we need to make sure that we have enough of the word to suffice for the noteText
      if(magazineObj[word] < 0) noteIsPossible = false;
    }
// If the word doesn't exist at all, then this piece of code will run the Boolean as false. 
    else noteIsPossible = false;
  });
  
// Lastly we run the noteIsPossible regardless however the code plays out.     
  return noteIsPossible;
  
}

harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secrect waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');

//Full code here

function harmlessRansomNote(noteText, magazineText) {
  var noteArr = noteText.split(' ');
  var magazineArr = magazineText.split(' ');
  var magazineObj = {};
  
  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });
  
  var noteIsPossible = true;
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) noteIsPossible = false;
    }
    else noteIsPossible = false; 
  });
  
  return noteIsPossible;
}
harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secrect waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');


// This is based on lessons 7-12 of 'Learning Algorithms in JavaScript from Scratch' by Eric Traub