# When to re-run the effect?

## Run effect after every render

```js
useEffect(() => {
  document.title = `The time is now ${Date.now()}`;
});
```

* Omitting the second parameter causes React to run the effect
    * After the first render
    * After every change to props or state