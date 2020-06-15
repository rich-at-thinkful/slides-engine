# An example: what does this code do?

```js
function find(arr, num) {
  let i=0;
  while (true) {
    const index = Math.floor(Math.random() * arr.length);
    i++;
    if (arr[index] === num) {
      break;
    }
  }
  console.log(`${num} was found in trial #${i}`);
}

const arr = [15, 16, 10, 2, 9, 5, 6];
find(arr, 16);
```

* Is this an efficient algorithm?
* How many operations are needed to find the element?
