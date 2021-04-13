# (EASY) 13. Roman to Integer
Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D`, and `M`.

    **Symbol**  **Value** <br>
    I               1 <br>

For example, `2` is written `II` in Roman numeral, just two one's added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.

Roman numerals are usually written largets to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

<ul>
    <li><code>1</code> can be placed before <code>V</code> (5) and <code>X</code> (10) to make 4 and 9.</li>
    <li><code>X</code> can be placed before <code>L</code> (50) and <code>C</code> (100) to make 40 and 90.</li>
    <li><code>C</code> can be placed before <code>D</code> (500) and <code>M</code> (1000) to make 400 and 900.</li>
</ul>

Given a roman numeral, convert it to an integer.

**Example 1:** <br>
    <code>**Input:** s = "III"</code> <br>
    <code>**Output:** 3</code> <br>

**Example 2:** <br>
    <code>**Input:** s = "IV"</code> <br>
    <code>**Output:** 4</code> <br>
    
**Example 3:** <br>
    <code>**Input:** s = "IX"</code> <br>
    <code>**Output:** 9</code> <br>

**Example 4:** <br>
    <code>**Input:** s = "LVIII"</code> <br>
    <code>**Output:** 58</code> <br>
    <code>**Explanation:** L = 50, V = 5, III = 3.</code>

**Example 5:** <br>
    <code>**Input:** s = "MCMXCIV"</code> <br>
    <code>**Output:** 1994</code> <br>
    <code>**Explanation:** M = 1000, CM = 900, XC = 90 and IV = 4.</code>

**Constraints:**
<ul>
    <li><code>1 <= s.length <= 15</code></li>
    <li><code>s</code> contains only the characters <code>('I', 'V', 'X', 'L', 'C', 'D', 'M')</code>.</li>
    <li>It is <strong>guaranteed</strong> that <code>s</code> is a valid roman numeral in the range <code>[1, 3999]</code>.</li>
</ul>