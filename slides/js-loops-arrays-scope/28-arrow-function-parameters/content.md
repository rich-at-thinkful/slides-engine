# Arrow functions `=>`

* Syntax varies, depending on the parameters the function takes:

```js
// When there are no parameters, () is needed
items.forEach(() => console.log('another item'));

// When there is one parameter, no () around parameter required
items.forEach(item => console.log(item));

// When there are more than one parameters, () around parameters required
items.forEach((item, index) => console.log(`Index ${index} is: ${item}`));
```
