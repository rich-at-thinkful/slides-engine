# O(n) - Linear time

```js
function includes(items, itemToMatch) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === itemToMatch) {
            return true;
        }
     }
     return false;
}

includes([1, 1, 2, 3, 5, 8], 5);
```

* An algorithm whose complexity is proportional to its input size has a linear order of growth, or O(n)
