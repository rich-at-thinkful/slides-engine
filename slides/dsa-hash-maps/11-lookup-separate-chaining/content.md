# Lookup (separate chaining)

```js
const obj = {
  key: "gregg",
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
        <td class="background-green" id="lookup-separate-chaining-gregg">gregg</td>
        <td class="fragment fragment-dn" data-style="out"></td>
        <td class="fragment fragment-dn" id="lookup-separate-chaining-lookup-2"></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td class="background-red" id="lookup-separate-chaining-david">david</td>
        <td id="lookup-separate-chaining-lookup-1"></td>
        <td></td>
    </tr>
    <tr>
        <td class="background-blue">0</td>
        <td class="background-blue">1</td>
        <td class="background-blue">2</td>
        <td class="background-blue" id="lookup-separate-chaining-insertion-point">3</td>
        <td class="background-blue">4</td>
        <td class="background-blue">5</td>
    </tr>
    <tr style="background-color: transparent;">
        <td colspan="6">&nbsp;</td>
    </tr>
    <tr style="background-color: transparent;">
        <td></td>
        <td></td>
        <td></td>
        <td id="lookup-separate-chaining-hash">Hash</td>
        <td></td>
        <td></td>
    </tr>
</table>
</div>

<div class="cell-1">


</div>
</div>

<div class="line line-arrow-end" data-from="lookup-separate-chaining-hash" data-to="lookup-separate-chaining-insertion-point"></div>
<div class="line line-arrow-end" data-from="lookup-separate-chaining-lookup-1" data-to="lookup-separate-chaining-david" data-from-side="m"></div>
<div class="line line-arrow-end" data-from="lookup-separate-chaining-lookup-2" data-to="lookup-separate-chaining-gregg" data-from-side="m"></div>
<div class="line" data-from="lookup-separate-chaining-lookup-1" data-to="lookup-separate-chaining-lookup-2" data-from-side="m" data-to-side="m"></div>
