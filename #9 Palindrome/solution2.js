/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let stringInt = x.toString();
    let totalCharacters = stringInt.length - 1;
    let backwards = [];
    for (let i = totalCharacters; i >= 0; i--) {
        backwards.push(stringInt[i]);
    }
    let backwardsInt = backwards.join('');
  
    if (stringInt == backwardsInt) { return true; }
    return false;
};

console.log(isPalindrome(121));