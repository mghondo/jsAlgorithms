// This function uses binary searching methods to find a given number from a list (array). The process essentially starts the search in the middle of the list. if the value is greater than the middle value, the lesser half is discarded and the search continues in the middle of the greater half. this continues until the value is either found or the function is considered false. 

// The principle of binary search is that as our number of operations grows it will grow not proportionally but logarithmically. This proves to be quite efficient when dealing with functions having large amounts of information to filter through. The runs on O (log N) run time. 

// Our function will also use the principles of recursion in that it will continue to call itself until the base case is satified. The array will be spliced at the middle index as needed until the key is either found or it is confirmed that the key does not exist in the array. 

// Our function will output a boolean of true/false; true if the key is present and false if it is not. 

function binarySearch(numArray, key) {

// The first thing that we want to define is the middle index of our array. First we will divide the length of the array by 2 and then use the Math.floor function to round down. 
    var middleIdx = Math.floor(numArray.length / 2);
    
// Now we want to use this middle index to define the element of the array at that specific point on the index. 
    var middleElem = numArray[middleIdx];
    
// If the middle element is equal to the key, then we will return true.. 
    if (middleElem === key) return true;
    
// Now we will engage the priciple of binary search to look for our key if the middle index down not equal the key. We will cover three scenarios. First, if the middle element is less than the Key, then we will splice the array and look above the middle index. 
    else if (middleElem < key && numArray.length > 1) {
        return binarySearch(numArray.splice(middleIdx, numArray.length), key);
    }
    
// The second scenario is if the middle index is greater than the key. In this case we will splice at the middle index but instead continue to search between the middle index and 0. 
    else if (middleElem > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0, middleIdx), key);
    }

// If none of the scenarios above end up being true, then we will return false, indicating that the key does not exist in the array.     
    else return false;
}
 
// An example to test. 
binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 13);

// This is based on lessons 38-42 of 'Learning Algorithms in JavaScript from Scratch' by Eric Traub.