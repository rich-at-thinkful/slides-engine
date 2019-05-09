# Carrying data through recursions

## What does this program do?

```js {data-span="3:16:25 .highlight; 15:12:18 .highlight; 15:20:31 .highlight; 15:34:37 .highlight"}
const isValid = function(str, open=0) {
    if (str.length === 0) {
        return open === 0;
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
    return isValid(str.slice(1), open);
};
console.log(isValid('((()))'));
```
