# One more example

## What does this program do?

```js {data-span="1:10:15 .highlight; 6:9:17 .highlight .highlight-secondary; 7:49:57 .highlight .highlight-secondary; 9:12:17 .highlight; 9:33:41 .highlight .highlight-secondary; 13:25:34 .highlight .highlight-secondary"}
function filter(arr, predicate){
    // Base case
    if (!arr.length){
        return [];
    }
    if (predicate(arr[0])) {
        return [arr[0], ...filter(arr.slice(1), predicate)];
    }
    return filter(arr.slice(1), predicate);
};

const arr = [10,5,6,3,8];
console.log(filter(arr, x => x < 7));
```

* Let's walk through this example
* What is the base case?
* Can you explain what's happening in each recursive call?
