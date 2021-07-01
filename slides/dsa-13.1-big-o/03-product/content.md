# How many operations?

```js
function product(array) {
    let product = 1;
    for (let i = 0; i < array.length; i += 1) {
        product *= array[i];
    }
    return product;
};
const arr = [2,3,5];
console.log(product(arr));
```

* In order to multiply all the elements in the array, we have to visit every element in the array
* If the input has length of ten, the algorithm will perform ten multiplications, ten comparisons, ten increments
* If the input has length *n*, the algorithm will perform *n* multiplications etc.
* The time complexity is directly proportional to the size of the input
* The complexity is linear, or O(n)
