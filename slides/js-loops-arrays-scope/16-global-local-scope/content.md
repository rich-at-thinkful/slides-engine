# Global and local scope

```js
let globalVariable = 'I am a global variable';

const fn = function() {
  let localVariable = 'I am a local variable';
  console.log(globalVariable);
  console.log(localVariable);
};

fn();

console.log(globalVariable);
console.log(localVariable);
```

What four lines will be logged to console?

