/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Get the lengths of the input strings
  let n1 = str1.length;
  let n2 = str2.length;

  // If the lengths of both strings are not the same, they cannot be anagrams
  if (n1 !== n2)
    return false;

  // Convert strings to arrays of characters, sort them, and join them back to strings
  const sortedStr1 = str1.toLowerCase().split('').sort().join('');
  const sortedStr2 = str2.toLowerCase().split('').sort().join('');

  // Compare sorted strings character by character
  for (let i = 0; i < n1; i++)
    if (sortedStr1[i] !== sortedStr2[i])
      return false;

  // If all characters match, the strings are anagrams
  return true;
}

module.exports = isAnagram;
