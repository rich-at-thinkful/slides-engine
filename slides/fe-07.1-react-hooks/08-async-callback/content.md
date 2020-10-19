# `async` callback

* `useEffect` callback cannot be an async function
* Must be within the `useEffect` callback

```js
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then(setUser);
}, []);
```