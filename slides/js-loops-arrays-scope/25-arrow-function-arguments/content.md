# Arrow functions `=>`

### Function

```js
let array = [0, 2, 4, 6, 8, 10];

array.forEach(function(item, index) {
  console.log('Item: ' + item + ' Index: ' + index);
});
```


### Arrow function

```js {data-span="3:15:30 .highlight"}
let array = [0, 2, 4, 6, 8, 10];

array.forEach((item, index) => console.log('Item: ' + item + ' Index: ' + index));
```
