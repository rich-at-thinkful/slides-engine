# Passing a Function for State Updates

* Instead, pass a callback function
```
  <button
    onClick={() => {
      setSubscribedCount((currentCount) => currentCount + 1);
      setSubscribedCount((currentCount) => currentCount + 1);
    }}
  >
    Subscribe
  </button>
}
```