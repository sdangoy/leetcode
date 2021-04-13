# (EASY) 9. Palindrome Number
Given an integer `x`, return `true` if `x` is palindrome integer.

An integer is a **palindrome** when it reads the same backward as forward. For example, `121` is palindrome while `123` is not.

**Example 1:** <br>
    **`Input:`** `x = 121` <br>
    **`Output:`** `true` <br>

**Example 2:** <br>
    **`Input:`** `x = -121` <br>
    **`Output:`** `false` <br>
    **`Explanation:`** `From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.` <br>

**Example 3:** <br>
    **`Input:`** `x = 10` <br>
    **`Output:`** `false` <br>
    **`Explanation:`** `Reads 01 from right to left. Therefore it is not a palindrome.` <br>

**Example 4:** <br>
    **`Input:`** `x = -101` <br>
    **`Output:`** `false` <br>

**Constraints:**
    -2<sup>31</sup> <= x <= 2<sup>31</sup> - 1

**Follow up:** Could you solve it without converting the integer to a string?