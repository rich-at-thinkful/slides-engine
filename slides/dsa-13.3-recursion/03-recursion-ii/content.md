# Recursion

## A recursive method is one that calls itself

```js {data-span="1:10:18 .highlight; 4:5:13 .highlight"}
function countDown(parameterA, parameterB) {
    // Other logic that the function should perform

    countDown(valueA, valueB);
};

countDown(5, 3);
```
