# Carrying data through recursions

<div class="row small">
<div class="cell-3">

```js
function isValid(str, open=0) {
    if (str.length === 0) return open === 0;

    if (open < 0) return false;

    const char = str.charAt(0);
    if (char === '(') {
        open++;
    }
    if (char === ')') {
        open--;
    }

    return isValid(str.slice(1), open);
};
console.log(isValid('((()))'));
```

Base case {.fragment .annotation data-for=valid-last data-line=1 data-index=10}

</div>
<div class="cell-3">

<div class="row">
<div class="cell-3">

```js {.fragment data-index=1 #valid-first}
isValid('((()))', 0);
```

```js {.fragment data-index=2 .nudge-l-1}
isValid('(()))', 1);
```

```js {.fragment data-index=3 .nudge-l-2}
isValid('()))', 2);
```

```js {.fragment data-index=4 .nudge-l-3}
isValid(')))', 3);
```

```js {.fragment data-index=6 .nudge-l-4}
isValid('))', 2);
```

```js {.fragment data-index=7 .nudge-l-5}
isValid(')', 1);
```

```js {.fragment data-index=9 .nudge-l-6 #valid-last}
isValid('', 0);
```

<div class="fragment line line-arrow-end" data-from="valid-first" data-to="valid-last" data-index="11"></div>

</div>
<div class="cell-2">

```js {.fragment data-index=13 #valid-last-return}
return true;
```

```js {.fragment data-index=13 .nudge-r-1}
return true;
```

```js {.fragment data-index=13 .nudge-r-2}
return true;
```

```js {.fragment data-index=13 .nudge-r-3}
return true;
```

```js {.fragment data-index=13 .nudge-r-4}
return true;
```

```js {.fragment data-index=13 .nudge-r-5}
return true;
```

```js {.fragment data-index=12 .nudge-r-6 #valid-first-return}
return open === 0; // true
```

<div class="fragment line line-arrow-end" data-from="valid-first-return" data-to="valid-last-return" data-index="14"></div>

</div>
</div>
</div>
