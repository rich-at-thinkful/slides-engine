# Aside #2: Modules

## Split code into multiple files

```js
// fileA.js
export default function sayHello() { // One default export
    console.log('Hello');
}

export const name = 'Joe'; // Multiple named exports
export const location = 'Europe';
```

```js
// fileB.js
import sayHello from './fileA'; // Default export => no curly braces
import {name, location} from './fileA'; // Named export => curly braces
import React from 'react'; // No "./" - comes from node_modules
```
