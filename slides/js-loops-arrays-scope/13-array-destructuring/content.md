# Array destructuring

* Minimal code to extract data from an array and assign to local variables

### ES5 (the long way):

```js
function getVolume(...dimensions) {
  const width = dimensions[0];
  const length = dimensions[1];
  const height = dimensions[2];

  if (width < 10) throw new Error('Must be wider than 10"');
  return width * length * height;
}
```

### ES6: {.fragment}

```js {.fragment}
function getVolume(...dimensions) {
  const [ width, length, height ] = dimensions;

  if (width < 10) throw new Error('Must be wider than 10"');
  return width * length * height;
}
```
