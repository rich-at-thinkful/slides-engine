# Initializing

<div class="row">
<div class="cell-3">

* Allocate initial memory
* Set pointer to first block

</div>
<div class="cell-3">

<span class="background-red">&emsp;</span> Allocated

<span class="background-green">&emsp;</span> Allocated to array

<span class="background-blue">&emsp;</span> Free

<span>&emsp;</span> **In array length**

</div>
</div>

<div class="biggest">

```js
arr = [15];
```

</div>

<table style="table-layout: fixed; text-align:center;">
    <tr>
        <th scope="row">Values</th>
        <td class="background-red">0</td>
        <td class="background-red">0</td>
        <td class="background-red">0</td>
        <td class="fragment fragment-dn background-blue" data-style="out">0</strong></td>
        <td class="fragment fragment-dn background-green"><strong>15</strong></td>
        <td class="background-blue">0</td>
        <td class="background-blue">0</td>
        <td class="background-blue">0</td>
        <td class="background-blue">0</td>
    </tr>
    <tr>
        <th scope="row">Address</th>
        <td>0</td>
        <td>1</td>
        <td>2</td>
        <td id="ptr-end-4">3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
    </tr>
    <tr class="fragment" style="background-color: transparent;">
        <td colspan="9">&nbsp;</td>
    </tr>
    <tr class="fragment" style="background-color: transparent;">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td id="ptr-start-4">ptr</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>

<div class="line line-arrow-end" data-from="ptr-start-4" data-to="ptr-end-4"></div>
