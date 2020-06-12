# Binary search

```js
function binarySearch(array, value, start=0, end=array.length-1) {
    if (start > end) return -1;

    let index = Math.floor((start + end) / 2);
    let item = array[index];

    if (item === value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
};
```

* Find 45

<table>
    <tr>
        <td class="fragment fragment-dn" data-style="out" data-index="2">3</td>
        <td class="fragment fragment-dn background-red" data-style="in" data-index="2">3</td>
        <td class="fragment fragment-dn" data-style="out" data-index="2">12</td>
        <td class="fragment fragment-dn background-red" data-style="in" data-index="2">12</td>
        <td class="fragment fragment-dn" data-style="out" data-index="2">17</td>
        <td class="fragment fragment-dn background-red" data-style="in" data-index="2">17</td>
        <td class="fragment fragment-dn" data-style="out" data-index="2">19</td>
        <td class="fragment fragment-dn background-red" data-style="in" data-index="2">19</td>
        <td class="fragment fragment-dn" data-style="out">26</td>
        <td class="fragment fragment-dn background-blue" data-style="in-out">&gt;26</td>
        <td class="fragment fragment-dn background-red" data-style="in" data-index="2">26</td>
        <td class="fragment fragment-dn" data-style="out" data-index="5">38</td>
        <td class="fragment fragment-dn background-blue" data-style="in-out" data-index="5">&gt;38</td>
        <td class="fragment fragment-dn background-red" data-style="in" data-index="6">38</td>
        <td class="fragment fragment-dn" data-style="out" data-index="7">45</td>
        <td class="fragment fragment-dn background-green" data-style="in" data-index="7">45</td>
        <td class="fragment fragment-dn" data-style="out" data-index="3">62</td>
        <td class="fragment fragment-dn background-blue" data-style="in-out" data-index="3">&lt;62</td>
        <td class="fragment fragment-dn background-red" data-style="in" data-index="4">62</td>
        <td class="fragment fragment-dn" data-style="out" data-index="4">69</td>
        <td class="fragment fragment-dn background-red" data-style="in" data-index="4">69</td>
        <td class="fragment fragment-dn" data-style="out" data-index="4">83</td>
        <td class="fragment fragment-dn background-red" data-style="in" data-index="4">83</td>
    </tr>
</table>

