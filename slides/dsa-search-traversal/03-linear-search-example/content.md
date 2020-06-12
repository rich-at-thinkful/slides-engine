# Linear search

```js
function indexOf(array, value) {
    for (let i = 0; i < array.length; i ++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
};
```

* Find Dan

<table>
    <tr>
        <td class="fragment fragment-dn" data-style="out-in">Alice</td>
        <td class="fragment fragment-dn background-blue" data-style="in-out">Alice</td>
        <td class="fragment fragment-dn" data-style="out-in" data-index="2">Bob</td>
        <td class="fragment fragment-dn background-blue" data-style="in-out" data-index="2">Bob</td>
        <td class="fragment fragment-dn" data-style="out-in" data-index="3">Carol</td>
        <td class="fragment fragment-dn background-blue" data-style="in-out" data-index="3">Carol</td>
        <td class="fragment fragment-dn" data-style="out-in" data-index="4">Dan</td>
        <td class="fragment fragment-dn background-green" data-style="in-out" data-index="4">Dan</td>
        <td>Eve</td>
    </tr>
</table>

