var longestCommonPrefix = function(strs) {
    // find the longest common prefix amongst an array of strings
    // if no common prefix, return empty string: ''.
    // will only consist of lower-case English letters.

    // ** IF THERE IS NO WORDS IN THE ARRAY, THEN RETURN EMPTY STRING.
    // *** IF THERE IS ONLY ONE WORD IN THE ARRAY, THEN RETURN THE ONE WORD.

    // Store the first letter of the first word into similar-letter array.
    // Check the first letter of the rest of the words to see if it matches the first letter of the similar-letter array.
        // if there isn't a match, then there is not a common prefix and return '' immediately.
    // Store the second letter of the first word into the similar-letter array
    // Check the second letter of the rest of the words to see if it matches the first letter of the similar-letter array.
        // if there isn't a match, then remove the second letter and return the array.
    // Continue...
    
    
    //
    var similarLetters = [];
    var letterCounter = 0;
    var hasPrefix = true;

    if (strs.length == 0) { return ''; }
    if (strs.length == 1) { return strs[0]; }
    if (strs.includes('')) { return ''; }

    let limit = strs[0].length;
    let limitCounter = 0;


    while (hasPrefix) {
        for (let i = 0; i < strs.length; i++) {
            if (i == 0) { similarLetters.push(strs[0][letterCounter]); }
            for (let j = 0; j < similarLetters.length; j++) {
                if (similarLetters[j] != strs[i][j] && similarLetters.length == 1) { return ''; }
                if (similarLetters[j] != strs[i][j] && similarLetters.length > 1) { similarLetters.pop(); return similarLetters.join(''); }
            }
        }
        letterCounter++;
        limitCounter++;
        if (limitCounter == limit) { return similarLetters.join(''); }
    }
};

console.log(longestCommonPrefix(['flower', 'flower', 'flower','flower']));
/* RESULTS: 
Runtime: 120ms, faster than 5.11% of JavaScript submissions
Memory Usage: 40.1 MB, less than 35.56% of JavaScript submissions
*/