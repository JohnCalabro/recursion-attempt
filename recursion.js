/** product: calculate the product of an array of numbers. */

//first commit, will revisit after course or while practicing. 


function product(nums) {
  //stopping point/base case
  if(nums.length === 0) {
    return 1;
  }
    return nums[0] * product(nums.slice(1));
}

product([1,2,3]) //6
product([6,5,9]) //270



/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) {
    return 0;
  }
  const curr = words[0];
  const remWords = words.slice(1)
 
  const res = longest(remWords)
 
  return Math.max(curr.length, res)
}

longest(['chicken', 'cat', 'diamondback'])



/** everyOther: return a string with every other letter. */

function everyOther(str) {
  // Base case
  if (str.length <= 1) {
    return str;
  }
  
  // Recursive case
  return str[0] + everyOther(str.slice(2));
}

everyOther('chicken')

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {


}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
