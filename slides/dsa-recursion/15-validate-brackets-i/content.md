# Carrying data through recursions

## What does this program do?

<pre><code>
const isValid = function(str, open=0) {
    if (str.length === 0) {
        return <span class="highlight">open === 0</span>;
    }
    if (open < 0) {
        return false;
    }
    const char = str.charAt(0);
    if (char === '(') {
        open++;
    }
    if (char === ')') {
        open--;
    }
    return <span class="highlight">isValid</span>(<span class="highlight">str.slice(1)</span>, <span class="highlight">open</span>);
};
console.log(isValid('((()))'));
</code></pre>
