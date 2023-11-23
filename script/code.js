function isPalindrome(string) {
    let cleanedString = string.toLowerCase();
    let reversedString = cleanedString.split('').reverse().join('');
    
    if (cleanedString === reversedString) {
      return `${string} is a palindrome!`;
    } else {
      return `${string} is not a palindrome.`;
    }
}

let result = isPalindrome("Racecar");
console.log(result);