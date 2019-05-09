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

```js {data-span="1:27:42 .highlight"}
const doubled = array.map((item, index) => {
  return item * 2
});
console.log(doubled);
```

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

```js {data-span="1:31:46 .highlight"}
const filtered = array.filter((item, index) => {
  return item > 5;
});
console.log(filtered);
```

</div>
</div>
