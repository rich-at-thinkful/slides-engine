# Passing a Function for State Updates

* Instead, Pass a Function
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