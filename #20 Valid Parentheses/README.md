# (EASY) 20. Valid Parentheses
Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code>, <code>']'</code>, determine if the input string is valid.

Any input string is valid if:
<ol>
    <li>Open brackets must be closed by the same type of brackets.</li>
    <li>Open brackets must be closed in the correct order.</li>
</ol>

**Example 1:** <br>
    <pre>
        <b>Input:</b> s = "()"
        <b>Output:</b> true
    </pre>

**Example 2:** <br>
    <pre>
        <b>Input:</b> s = "()[]{}"
        <b>Output:</b> true
    </pre>

**Example 3:** <br>
    <pre>
        <b>Input:</b> s = "(]"
        <b>Output:</b> false
    </pre>

**Example 4:** <br>
    <pre>
        <b>Input:</b> s = "([)]"
        <b>Output:</b> false
    </pre>

**Example 5:** <br>
    <pre>
        <b>Input:</b> s = "{[]}"
        <b>Output:</b> true
    </pre>

**Constraints:**
<ul>
    <li><code>1 <= s.length <= 10<sup>4</sup></code></li>
    <li><code>s</code> consists of parentheses only <code>'()[]{}'</code>.</li>
</ul>