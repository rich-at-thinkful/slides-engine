# Countdown using Recursion

<div class="row">
<div class="cell-4">

```js {#countdown-no-base}
function countDown(from) {
    console.log(from);
    countDown(from - 1);
}
countDown(5);
```

</div>
<div class="cell-2">

```js {.annotation data-for=countdown-no-base data-line=5}
countDown(5)
```

```js {.annotation data-for=countdown-no-base data-line=3 .nudge-l-1}
countDown(4)
```

```js {.annotation data-for=countdown-no-base data-line=3 .nudge-l-2}
countDown(3)
```

```js {.annotation data-for=countdown-no-base data-line=3 .nudge-l-3}
countDown(2)
```

</div>

</div>

<div class="row">
<div class="cell-4">

```bash
5
4
3
2
1
0
-1
-2
...
-17923
-17924
net.js:676
  var req = new WriteWrap();
            ^

RangeError: Maximum call stack size exceeded
```

</div>
<div class="cell-2">

**Do we have a problem here?** {.big}

</div>
</div>
