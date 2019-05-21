# Unit testing

```js
// math.js
export function add(a, b) {
    return a + b;
}
```

```js
// math.test.js
import {add} from './math';
describe('add', () => { // Test suite
    it('should add positive numbers', () => { // Test case
        const result = add(3, 5);
        expect(result).toEqual(8); // Assertion
    });

    it('should add negative numbers', () => { 
        const result = add(-3, -5);
        expect(result).toEqual(-8);
    });
});
```
