/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    //use a regular expression to match vowels(both uppercase and lowercase)
    const vowelRegex = /[aeiou]/gi;
    //use the match method to find all matches of vowels in the string
    const matches = str.match(vowelRegex);
    //return the count of matches (number of vowels)
    return matches ? matches.length : 0;

}

module.exports = countVowels;