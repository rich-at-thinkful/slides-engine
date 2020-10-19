# When to re-run the effect?

## Run effect once

```js
useEffect(() => {
  document.title = `Welcome to Thinkful!`;
}, []); // Only apply the effect once by passing []
```

* Setting the second parameter to an empty array causes React to run the effect once