function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = word.split('').reverse().join('');
  if (word === reversedWord) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}
// isPalindrome('madam');
// isPalindrome('Mark');
/* 
  Add your pseudocode here
  START
  INPUT word
  let reversedWord = Word in reverse
  If word = reversedWord
  OUTPUT true;
  Else OUTPUT false
  STOP
*/
/*
  Add written explanation of your solution here
  isPalindrome declares a variable reversedWord to store the word set as the argument in reverse.
  .split('') method separates the word into its individual characters 
  .reverse method reverses the individual characters
  .join('') method joins the reversed characters thus creating a reversed word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log('Expecting: true');
  console.log('=>', isPalindrome('racecar'));

  console.log('');

  console.log('Expecting: false');
  console.log('=>', isPalindrome('robot'));
}

module.exports = isPalindrome;
