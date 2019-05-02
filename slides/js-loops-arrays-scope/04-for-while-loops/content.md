# Loops: for and while loops

### for loop

<div class="row">
<div class="cell-4">

<pre>
<code class="language-js" id="for-loop">
for (let i=0; i<=10; <span class="highlight">i++</span>) {
  console.log(`iteration ${i}`);
}
</code>
</pre>

</div>
<div class="cell-2">

loop terminating condition {.annotation data-line=1 data-for="for-loop"}

</div>
</div>


<div class="row">
<div class="cell">

### while loop

```js
let i = 0;
while (i <= 10) {
  console.log(`iteration ${i}`)
  i++;
}
```

</div>
<div class="cell">

### do-while loop

```js
let i = 10;
do {
  console.log(`iteration ${i}`)
  i++;
} while (i < 10);
```

</div>
