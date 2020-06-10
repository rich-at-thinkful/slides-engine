# Dealing with collisions (separate chaining)

```js
const obj = {
  key: "gregg",
  value: "drums",
};

const hash = hashString(obj.key); // 260512401

const index = hash % capacity; // 3
```
<div class="row">
<div class="cell-5">
<table style="table-layout: fixed; text-align:center;">
    <tr class="background-transparent">
        <td></td>
        <td></td>
        <td></td>
        <td class="background-transparent fragment fragment-dn" data-style="out">&nbsp;</td>
        <td class="background-green fragment fragment-dn">gregg</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td class="background-red" id="collisions-separate-chaining-ll-first">david</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td class="background-blue">0</td>
        <td class="background-blue">1</td>
        <td class="background-blue">2</td>
        <td class="background-blue" id="collisions-separate-chaining-insertion-point">3</td>
        <td class="background-blue">4</td>
        <td class="background-blue" id="collisions-separate-chaining-array-last">5</td>
    </tr>
    <tr style="background-color: transparent;">
        <td colspan="6">&nbsp;</td>
    </tr>
    <tr style="background-color: transparent;">
        <td></td>
        <td></td>
        <td></td>
        <td id="collisions-separate-chaining-hash">Hash</td>
        <td></td>
        <td></td>
    </tr>
</table>
</div>

<div class="cell-1">

Linked list {.highlight #collisions-separate-chaining-linked-list}

Array {.highlight #collisions-separate-chaining-array}

</div>
</div>

<div class="line line-arrow-end" data-from="collisions-separate-chaining-hash" data-to="collisions-separate-chaining-insertion-point"></div>
<div class="line" data-from="collisions-separate-chaining-linked-list" data-to="collisions-separate-chaining-ll-first"></div>
<div class="line" data-from="collisions-separate-chaining-array" data-to="collisions-separate-chaining-array-last"></div>
