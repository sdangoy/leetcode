/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let stringInt = x.toString();
    
    if(stringInt == stringInt.split('').reverse().join('')) { return true; }
    return false;
};

console.log(isPalindrome(-121));