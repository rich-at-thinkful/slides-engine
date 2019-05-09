# Block-level scope with let/const

Scope is typically limited to functions only - no `if`, `for`, or other code blocks

<div class="row">
<div class="cell-4">

```js {#var-scope data-span="1:6:8 .highlight"}
for (var i = 0; i < 10; i++) {
  // do something
}

console.log(i);  //=>  10
```

</div>
<div class="cell">

Yuck! The `i` variable is hoisted to global scope {.annotation data-for=var-scope data-line=1}

</div>
</div>

<div class="row">
<div class="cell-4">

```js {#let-scope data-span="1:6:8 .highlight"}
for (let i = 0; i < 10; i++) {
  // do something
}

console.log(i);  //=>  ReferenceError
```

</div>
<div class="cell">

Better! Variable `i` is scoped to the loop block only {.annotation data-for=let-scope data-line=1}

</div>
</div>
