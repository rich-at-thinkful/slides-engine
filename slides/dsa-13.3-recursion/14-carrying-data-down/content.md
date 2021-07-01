# Carrying data through recursions (top-down)

```js
function upperStr(str, result='') {
  if (str === "") {
    return result;
  }
  const newChar = str[0].toUpperCase();

  // Concatenate new data with reduced string for next iteration
  return upperStr(str.slice(1), result + newChar);
}
console.log(upperStr('hello'));
```

* How does this differ from the bottom-up version?
