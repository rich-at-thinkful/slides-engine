# O(n^2) - Polynomial time

```js
function timesTable(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push([]);
        for (let j = 0; j < arr.length; j++) {
            result[i].push(arr[i] * arr[j]);
        }
    }
    return result;
}

console.log(timesTable([2, 4, 6, 8]));
```

* An algorithm whose running time is n to some power has a polynomial runtime, e.g. O(n^2), O(n^3)
* For example, two nested loops each running from 0 to n
    * The outer loop will run the inner loop n times
    * Each time, the inner loop will run n times
    * The number of iterations is n * n, which gives us a complexity of O(n^2)
* For three nested loops between 0 and n, the complexity will be O(n^3)
{.small}


