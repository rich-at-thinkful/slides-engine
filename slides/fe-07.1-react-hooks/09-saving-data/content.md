# Saving Data to an API using `fetch()`

```js
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`, {
    method: "PUT",
    body: JSON.stringify(user),
  })
  const savedData = await response.json();
```

