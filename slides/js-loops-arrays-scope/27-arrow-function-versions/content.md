# Arrow functions `=>`

* Syntax varies, depending on the parameters the function takes:

```js
// One line body
// Curly Braces are optional
// Return statement is implicit if there are no braces
const add = (a, b) => a + b;

// One line body with braces
// Note the explicit return
const add = (a, b) => {
    return a + b;
};

// Multiple line body
// Braces are mandatory
// Return statement is necessary
const add = (a, b) => {
    console.log('Adding', a, 'and', b);
    return a + b;
};
```
