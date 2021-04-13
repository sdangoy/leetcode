# (EASY) 13. Roman to Integer
Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D`, and `M`.

<code>
**Symbol**        **Value**<br>
</code>

For example, `2` is written `II` in Roman numeral, just two one's added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.

Roman numerals are usually written largets to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

<ul>
    <li>`1` can be placed before `V` (5) and `X` (10) to make 4 and 9.</li>
    <li>`X` can be placed before `L` (50) and `C` (100) to make 40 and 90.</li>
    <li>`C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.</li>
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
    <li>`1 <= s.length <= 15`</li>
    <li>`s` contains only the characters `('I', 'V', 'X', 'L', 'C', 'D', 'M')`.</li>
    <li>It is **guaranteed** that `s` is a valid roman numeral in the range `[1, 3999]`.</li>
</ul>