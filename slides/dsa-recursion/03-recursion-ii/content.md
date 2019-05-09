# Recursion

## A recursive method is one that calls itself

```js {data-span="1:7:15 .highlight; 4:5:13 .highlight}
const countDown = function (some parameters) {
    // other logic that the function should perform

    countDown(some other parameters);
};

countDown(5);
```
