# One more example

<div class="row smaller">
<div class="cell-3">

<pre><code class="language-js">
const filter = function(arr, predicate){
    //base case
    if (!arr.length){
        return [];
    }
    if (predicate(arr[0])) {
        return [arr[0], <span class="fragment highlight-secondary" data-style="highlight-in" data-index="5">...filter(arr.slice(1), predicate)</span>];
    }
    return <span class="fragment highlight" data-style="highlight-in" data-index="3">filter(arr.slice(1), predicate);</span>
};

let arr = [10,5,6,3,8];
console.log(filter(arr, x => x < 7));
</code></pre>

Base case {.annotation .fragment data-for=filter-last data-line=2 data-index=11}

</div>
<div class="cell-3">

<div class="row">
<div class="cell-3">

```js {.fragment}
filter([10,5,6,3,8], x => x < 7)
```

<pre><code class="language-js fragment nudge-l-1" data-index="2">
predicate(10) // false
return <span class="fragment" data-style="highlight-in" data-index="3">filter([5,6,3,8], x=>x<7);</span>
</code></pre>

<pre><code class="language-js fragment nudge-l-2" data-index="4">
predicate(5) // true
return [5, <span class="fragment highlight-secondary" data-style="highlight-in" data-index="5">...filter([6,3,8], x=>x<7)</span>];
</code></pre>

<pre><code class="language-js fragment nudge-l-3" data-index="6">
predicate(6) // true
return [6, <span class="fragment highlight-secondary" data-style="highlight-in" data-index="7">...filter([3,8], x=>x<7)</span>];
</code></pre>

<pre><code class="language-js fragment nudge-l-4" data-index="8">
predicate(3) // true
return [3, <span class="fragment highlight-secondary" data-style="highlight-in" data-index="9">...filter([8], x=>x<7)</span>];
</code></pre>

<pre><code class="language-js fragment nudge-l-5" data-index="10" id="filter-last">
predicate(8) // false
return <span class="fragment" data-style="highlight-in" data-index="11">filter([], x=>x<7)</span>;
</code></pre>

</div>

<div class="cell-3">

```js {.fragment data-index=17}
return [5, 6, 3];
```
<pre><code class="language-js fragment nudge-r-1" data-index="16">
<span></span>
return [5, 6, 3];
</code></pre>

<pre><code class="language-js fragment nudge-r-2" data-index="15">
<span></span>
return [5, 6, 3];
</code></pre>

<pre><code class="language-js fragment nudge-r-3" data-index="14">
<span></span>
return [6, 3];
</code></pre>

<pre><code class="language-js fragment nudge-r-4" data-index="13">
<span></span>
return [3];
</code></pre>

<pre><code class="language-js fragment nudge-r-5" data-index="12">
<span></span>
return [];
</code></pre>
</div>
</div>
</div>
