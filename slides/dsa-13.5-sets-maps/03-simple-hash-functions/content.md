# Simple hash functions

## Integers

```js
function hashInteger(number) {
    return number % hashTable.length;
}
```

## Strings

```js
// Take the ASCII value of each character and add them up
function hashString(string) {
    let total = 0;
    for (let i = 0; i < string.length; i++) {
        total += string.charCodeAt(i);
    }
    return total % hashTable.length;
}
```


