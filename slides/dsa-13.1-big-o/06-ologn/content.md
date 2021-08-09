# O(log n) - Logarithmic time

```js
function logPowerOfTwoValues(array) {
  // Note: i is multiplied by 2, not incremented
  for (let i = 1; i < array.length; i *= 2) {
    console.log(array[i]);
  }
}

logPowerOfTwoValues([2, 3, 5, 7, 9, 10, 14, 19, 23]);
```

- Some fraction of the remaining input is processed in each iteration of a logarithmic algorithm
- For example, if you have an array of 32 elements, an algorithm might process the first 16 (half of the remaining elements), then 8 (half of the remaining elements), then 4, then 2, then 1.
