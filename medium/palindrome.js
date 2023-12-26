/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  //convert to lowercase to make it case insensitive
  const lowerStr = str.toLowerCase().replace(/[^\w]/g, '');
  //reverse the string and compare it with the original string
  return lowerStr === lowerStr.split('').reverse().join('');
  return true;
}

module.exports = isPalindrome;
