# Functions as return values

## Creating closures

<div class="row">
<div class="cell-2">

The magic happens here {.annotation data-line=4 .fragment data-for=closure data-index=2}

<div class="fragment annotation" data-for="closure" data-line="10 11" data-index="3">

Create two "instances" of the closure

```js
{runningCount: 0}
```

```js
{runningCount: 0}
```
</div>

</div>
<div class="cell-2">

``` {#closure data-span="4:5:19 .fragment data-style=highlight-in data-index=2"}
function createCounter() {
    let runningCount = 0;

    return function(increment = 1){
        runningCount += increment;
        return runningCount;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());    // 1
console.log(counter1());    // 2
console.log(counter1());    // 3

console.log(counter2(5));   // 5
console.log(counter2(3));   // 8
console.log(counter2(2));   // 10
```

</div>
<div class="cell-2">

Variable held in closure {.fragment .annotation data-for=closure data-line=2}

Returning a function allows creation of closure {.fragment .annotation data-for=closure data-line=5 data-index=2}

Each function holds its own version of the `runningCount` variable {.fragment .annotation data-index=4 data-line="13 17" data-for=closure}

</div>
</div>
