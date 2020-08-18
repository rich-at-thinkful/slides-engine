# Carrying data through recursions

```js
function upperStr(str){
  if (str === "") {
    return "";
  }
  const newChar = str[0].toUpperCase();

  // Concatenate new data with reduced string for next iteration
  return newChar + upperStr(str.slice(1));
}
console.log(upperStr('hello'));
```

* What does this function do?
* What is the base case?
* What is happening in each recursive cases?
