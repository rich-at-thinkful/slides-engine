# Chaining promises

```js
fetch('https://api.github.com/users/dhh')
    .then(res => {
        // Returning another promise means it is adopted by the first promise
        // Subsequent .then calls wait for this to complete
        return res.json()
    })
    .then(data => {
        // You can mix in sync logic too
        // The returned value is resolved
        return data.avatar_url
    })
    .then(url => fetch(url)) // Implicit return
    .then(res => res.blob())
    .then(blob => {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(blob);
    })
    // Catch errors from entire chain in one place
    .catch(err => console.error(err));
```
