# When to re-run the effect?

## Run effect when a value changes

```js
const [count, setCount] = useState(0);

useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes
```

* Setting the second parameter to a variable causes the effect to run only when the value changes