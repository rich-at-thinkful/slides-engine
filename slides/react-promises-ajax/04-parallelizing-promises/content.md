# Parallelizing promises

```js
fetch('https://api.github.com/user/dhh/repos')
    .then(res => res.json())
    .then(repos => {
        // Create an array of promises, all working in parallel
        const promises = repos.map(repo => fetch(`${repo.url}/readme`));
        // Create a single promise, which will resolve when all of
        // the promises in the array resolve
        return Promise.all(promises);
    })
    .then(responses => { // Array of the values resolved by the promises
        const missingCount = responses.reduce(
            (count, res) => count + (res.status === 404 ? 1 : 0),
            0
        );
        console.log(missingCount);
    });
```
