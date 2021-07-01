# Resizing (Naive)

* Can't simply increase the size of the allocation
    * There might be stuff using the memory next to the existing allocation
* Allocate a new block which is larger

<div class="biggest">

```js
arr.push(12);
```

</div>

<table style="table-layout: fixed; text-align:center;">
    <tr>
        <th scope="row">Values</th>
        <td class="background-red">0</td>
        <td class="background-red">0</td>
        <td class="background-red">0</td>
        <td class="background-green fragment fragment-dn" data-style="out" data-index="3"><strong>15</strong></td>
        <td class="background-blue fragment fragment-dn" data-index="3">15</td>
        <td class="background-red">0</td>
        <td class="background-blue fragment fragment-dn" data-style="out">0</td>
        <td class="background-blue fragment fragment-dn" data-style="out">0</td>
        <td class="fragment fragment-dn background-green" data-style="in-out">0</td>
        <td class="fragment fragment-dn background-green" data-style="in-out">0</td>
        <td class="fragment fragment-dn background-green" data-index="2"><strong>15</strong></td>
        <td class="fragment fragment-dn background-green" data-index="2"><strong>12</strong></td>
        <td class="background-blue">0</td>
    </tr>
    <tr>
        <th scope="row">Address</th>
        <td>0</td>
        <td>1</td>
        <td>2</td>
        <td id="ptr-end-6">3</td>
        <td>4</td>
        <td id="ptr-end-6-2">5</td>
        <td>6</td>
        <td>7</td>
    </tr>
    <tr style="background-color: transparent;">
        <td colspan="9">&nbsp;</td>
    </tr>
    <tr style="background-color: transparent;">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td id="ptr-start-6" class="fragment fragment-dn" data-style="out" data-index="2">ptr</td>
        <td></td>
        <td></td>
        <td id="ptr-start-6-2" class="fragment fragment-dn" data-index="2">ptr</td>
        <td></td>
        <td></td>
    </tr>
</table>

<div class="line line-arrow-end" data-from="ptr-start-6" data-to="ptr-end-6"></div>
<div class="line line-arrow-end" data-from="ptr-start-6-2" data-to="ptr-end-6-2"></div>
