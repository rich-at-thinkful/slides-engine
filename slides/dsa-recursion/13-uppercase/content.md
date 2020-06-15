# Carrying data through recursions

```
function upperStr(str){
  if (str === "") {
    return "";
}
  const newChar = str[0].toUpperCase();

  // Concatenate new data with reduced string for next iteration...
  return newChar + upperStr(str.slice(1)); 
}
console.log(upperStr('hello'));
```

<div class="row">
<div class="cell-2">

```js {.fragment #first-upper}
upperStr('hello') === 'H' + upperstr('ello')
```

```js {.fragment data-index=2 .nudge-l-1}
upperStr('ello') === 'E' + upperstr('llo')
```

```js {.fragment data-index=3 .nudge-l-2}
upperStr('llo') === 'L' + upperstr('lo')
```

```js {.fragment data-index=4 .nudge-l-3}
upperStr('lo') === 'L' + upperstr('o')
```

```js {.fragment data-index=5 .nudge-l-4}
upperStr('o') === 'O' + upperstr('')
```

```js {.fragment data-index=6 .nudge-l-5 #last-upper}
upperStr('') === '' // base case
```

<div class="fragment line line-arrow-end" data-index="7" data-from="first-upper" data-to="last-upper"></div>

</div>

<div class="cell-2">

```js {.fragment data-index=18}
return 'HELLO';
```

```js {.fragment data-index=16}
return 'ELLO';
```

```js {.fragment data-index=14}
return 'LLO';
```

```js {.fragment data-index=12}
return 'LO';
```

```js {.fragment data-index=10}
return 'O';
```

```js {.fragment data-index=8}
return '';
```
</div>
<div class="cell-2">

```js {.fragment data-index=17 #last-upper-return}
'H' + 'ELLO' = 'HELLO'
```

```js {.fragment data-index=15 .nudge-r-1}
'E' + 'LLO' = 'ELLO'
```

```js {.fragment data-index=13 .nudge-r-2}
'L' + 'LO' = 'LLO'
```

```js {.fragment data-index=11 .nudge-r-3}
'L' + 'O' = 'LO'
```

```js {.fragment data-index=9 .nudge-r-4 #first-upper-return}
'O' + '' = 'O'
```

<div class="fragment line line-arrow-end" data-index="19" data-from="first-upper-return" data-to="last-upper-return"></div>

</div>

</div>


