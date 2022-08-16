# Binary search

```js
function binarySearch(sortedElements, target) {
  let start = 0, end = sortedElements.length - 1;

  while (start <= end) {
    const index = Math.floor((start + end) / 2);
    const currentElement = sortedElements[index];

    if (currentElement === target) {
      return index;
    } else if (currentElement < target) {
      start = index + 1;
    } else if (currentElement > target) {
      end = index - 1;
    }
  }

  return -1;
}
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

