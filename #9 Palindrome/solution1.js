/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let stringInt = x.toString();
    let array = stringInt.split('');
    let holdArray = [];
    let palindrome = '';
    
    while (array.length > 1) {
        holdArray.push(array.shift());
    }
    
    while (holdArray.length > 0) {
        array.push(holdArray.pop());
    }

    for (let i = 0; i < array.length; i++) {
        palindrome += array[i];
    }
    
    if (stringInt == palindrome) { return true; }
    else { return false; }
    
};

console.log(isPalindrome(21));