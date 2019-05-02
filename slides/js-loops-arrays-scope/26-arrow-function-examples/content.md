# Arrow functions `=>`

<div class="row">
<div class="cell-3">

```js
const doubled = array.map(function(item, index) {
  return item * 2;
});
console.log(doubled);
```

</div>
<div class="cell-3">

<pre><code>
const doubled = <span class="highlight">array.map((item, index) =></span> {
  return item * 2
});
console.log(doubled);
</code></pre>

</div>
</div>


<div class="row">
<div class="cell-3">

```js
const filtered = array.filter(function(item, index) {
   return item > 5;
});
console.log(filtered);
```

</div>
<div class="cell-3">

<pre><code>
const filtered = <span class="highlight">array.filter((item, index) =></span> {
  return item > 5;
});
console.log(filtered);
</code></pre>

</div>
</div>
