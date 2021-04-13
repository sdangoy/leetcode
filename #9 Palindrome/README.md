# (EASY) 9. Palindrome Number
Given an integer `x`, return `true` if `x` is palindrome integer.

An integer is a **palindrome** when it reads the same backward as forward. For example, `121` is palindrome while `123` is not.

**Example 1:** <br>
    <code>**Input:** x = 121</code> <br>
    <code>**Output:** true</code> <br>

**Example 2:** <br>
    <code>**Input:** x = -121</code> <br>
    <code>**Output:** false</code> <br>
    <code>**Explanation:** From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.</code> <br>

**Example 3:** <br>
    <code>**Input:** x = 10</code> <br>
    <code>**Output:** false</code> <br>
    <code>**Explanation:** Reads 01 from right to left. Therefore it is not a palindrome.</code> <br>

**Example 4:** <br>
    <code>**Input:** x = -101</code> <br>
    <code>**Output:** false</code> <br>

**Constraints:**
    -2<sup>31</sup> <= x <= 2<sup>31</sup> - 1

**Follow up:** Could you solve it without converting the integer to a string?