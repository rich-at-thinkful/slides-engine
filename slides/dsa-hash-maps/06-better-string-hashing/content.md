# A better string hash function

* Like the simple string hashing function, but with a whole bunch of bitwise magic
* Lots of magic numbers
    * Fit the mathematical criteria to perform well
    * Perform well on real-life processors

```js
function hashString(string) {
    let hash = 5381;
    for (let i=0; i<string.length; i++) {
        hash = (hash << 5) + hash + string.charCodeAt(i);
        hash = hash & hash;
    }
    return hash >>> 0;
};
```
