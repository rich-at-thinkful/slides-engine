# Another Way To Get Data From an API

## `fetch()`

* Used To Make API Call
* Two-step process when handling JSON Data (compared to Axios)
    * Make Request
    * Call `.json()` method on the response

```js
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then(setUser);
```