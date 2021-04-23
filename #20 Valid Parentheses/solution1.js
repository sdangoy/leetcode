/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let currentOpenBracket = '';
    let bracketStack = []; 
    
    if (s.length <= 1 || s[0] === ')' || s[0] === ']' || s[0] === '}') { // Edge cases to keep in mind that should return false
        return false;
    }
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            bracketStack.push(s[i]);
            continue;
        }
        
        currentOpenBracket = bracketStack.pop()
        if (s[i] === ')' && currentOpenBracket != '(') { // For each ending bracket, check if it matches the latest opening bracket. Lots of repeated code here!
            return false;
        }
        
        if (s[i] === ']' && currentOpenBracket != '[') {
            return false;
        }
        
        if (s[i] === '}' && currentOpenBracket != '{') {
            return false;
        }
    }
    
    if (bracketStack.length > 0) { // If there are any opening brackets remaining in Stack, then there aren't enough matching closing brackets!
        return false;
    }
    
    return true;
};
/* RESULTS: 
Runtime: 120ms, faster than 5.11% of JavaScript submissions
Memory Usage: 40.1 MB, less than 35.56% of JavaScript submissions
O(n) runtime where n is the length of the string input because it iterates through the string only once!
O(n) space where n is the length of the string input.
*/