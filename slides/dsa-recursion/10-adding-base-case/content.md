# Adding a base case

<div class="row">
<div class="cell-2">

<pre><code class="language-js">
const countDown = function(from) {
    // Base case
    if (from === 0) {
        return;
    }

    // General case
    console.log(from);
    countDown(from - 1);
};

countDown(5);
</code></pre>

Base case {.annotation data-for=base-case data-line=1 .fragment data-index=12}

</div>
<div class="cell-2">

```js {.fragment #first-countdown}
countDown(5);
```

```js {.fragment data-index=3 .nudge-l-1}
countDown(4);
```

```js {.fragment data-index=5 .nudge-l-2}
countDown(3);
```

```js {.fragment data-index=7 .nudge-l-3}
countDown(2);
```

```js {.fragment data-index=9 .nudge-l-4}
countDown(1);
```

```js {.fragment data-index=11 .nudge-l-5 #base-case}
countDown(0);
```

<div class="line line-arrow-end fragment" data-from="first-countdown" data-to="base-case" data-index="13"></div>

</div>

<div class="cell-2">

```js {.fragment data-index=19 #last-return}
return;
```
```js {.fragment data-index=18 .nudge-r-1}
return;
```
```js {.fragment data-index=17 .nudge-r-2}
return;
```
```js {.fragment data-index=16 .nudge-r-3}
return;
```
```js {.fragment data-index=15 .nudge-r-4}
return;
```
```js {.fragment data-index=14 .nudge-r-5 #first-return}
return;
```

<div class="line line-arrow-end fragment" data-from="first-return" data-to="last-return" data-index="20"></div>


</div>

</div>

<pre><code class="language-bash">
<span class="fragment" data-index="2">5</span>
<span class="fragment" data-index="4">4</span>
<span class="fragment" data-index="6">3</span>
<span class="fragment" data-index="8">2</span>
<span class="fragment" data-index="10">1</span>
</code></pre>

