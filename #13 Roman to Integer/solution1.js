/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    /*
    convert string to array
    create a var (sum) that stores sum of char
    check each index of an array:
        if character at index is:
            I: check if next character is V or X -> (4 or 9)
            X: check if next character is L or C -> (40 or 90)
            C: check if next character is D or M -> (400 or 900)
        else, add appropriate value to sum
    return sum; 
    */

    let sArray = s.split('');
    let sum = 0;
    for (let i = 0; i < sArray.length; i++) {
        switch(sArray[i]) {
            case 'I':
                if (sArray[i+1] == 'V') { sum += 4; i++; }
                else if (sArray[i+1] == 'X') { sum += 9; i++;}
                else { sum += 1; }
                break;
            case 'V':
                sum += 5;
                break;
            case 'X':
                if (sArray[i+1] == 'L') { sum += 40; i++; }
                else if (sArray[i+1] == 'C') { sum += 90; i++; }
                else { sum += 10; }
                break;
            case 'L':
                sum += 50;
                break;
            case 'C':
                if (sArray[i+1] == 'D') { sum += 400; i++; }
                else if (sArray[i+1] == 'M') { sum += 900; i++; }
                else { sum += 100; }
                break;
            case 'D':
                sum += 500;
                break;
            case 'M':
                sum += 1000;
                break;
        }
    }
    return sum;
};

console.log(romanToInt('MCMXCIV'));
/* RESULTS: 
Runtime: 164ms, faster than 70.11% of JavaScript submissions
Memory Usage: 44.7 MB, less than 86.21% of JavaScript submissions
*/