# One more example

<div class="row smaller">
<div class="cell-3">

```js {data-span="7:25:58 .fragment .highlight-secondary data-style=highlight-in data-index=5; 9:12:42 .fragment .highlight data-style=highlight-in data-index=3}
const filter = function(arr, predicate){
    //base case
    if (!arr.length){
        return [];
    }
    if (predicate(arr[0])) {
        return [arr[0], ...filter(arr.slice(1), predicate)];
    }
    return filter(arr.slice(1), predicate);
};

let arr = [10,5,6,3,8];
console.log(filter(arr, x => x < 7));
```

Base case {.annotation .fragment data-for=filter-last data-line=2 data-index=11}

</div>
<div class="cell-3">

<div class="row">
<div class="cell-3">

```js {.fragment}
filter([10,5,6,3,8], x => x < 7)
```

```js {.fragment .nudge-l-1 data-index=2 data-span="2:8:32 .fragment data-style=highlight-in data-index=3"}
predicate(10) // false
return filter([5,6,3,8], x=>x<7);
```

```js {.fragment .nudge-l-2 data-index=4 data-span="2:12:37 .fragment data-style=highlight-in .highlight-secondary data-index=5"}
predicate(5) // true
return [5, ...filter([6,3,8], x=>x<7)];
```

```js  {.fragment .nudge-l-3 data-index=6 data-span="2:12:35 .fragment data-style=highlight-in .highlight-secondary data-index=7"}
predicate(6) // true
return [6, ...filter([3,8], x=>x<7)];
```

```js {.fragment .nudge-l-4 data-index=8 data-span="2:12:33 .fragment data-style=highlight-in .highlight-secondary data-index=9"}
predicate(3) // true
return [3, ...filter([8], x=>x<7)];
```

```js {.fragment .nudge-l-5 data-index=10 #filter-last data-span="2:8:27 .fragment data-style=highlight-in data-index=11"}
predicate(8) // false
return filter([], x => x<7);
```

</div>

<div class="cell-3">

```js {.fragment data-index=17}
return [5, 6, 3];
```

```js {.fragment .nudge-r-1 data-index=16}

return [5, 6, 3];
```

```js {.fragment .nudge-r-2 data-index=15}

return [5, 6, 3];
```

```js {.fragment .nudge-r-3 data-index=14}

return [6, 3];
```

```js {.fragment .nudge-r-4 data-index=13}

return [3];
```

```js {.fragment .nudge-r-5 data-index=12}

return [];
```
</div>
</div>
</div>
