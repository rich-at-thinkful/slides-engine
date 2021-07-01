# Pushing

* Resize so we have space for the new item
* Add the value to the end (`ptr + length`)
* Increase the length


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
        <td class="background-green"><strong>15</strong></td>
        <td class="background-blue fragment fragment-dn" data-style="out">0</td>
        <td class="fragment fragment-dn background-green" data-style="in-out">0</td>
        <td class="fragment fragment-dn background-green" data-style="in-out" data-index="2">12</td>
        <td class="fragment fragment-dn background-green" data-index="3"><strong>12</strong></td>
        <td class="background-blue">0</td>
        <td class="background-blue">0</td>
        <td class="background-blue">0</td>
    </tr>
    <tr>
        <th scope="row">Address</th>
        <td>0</td>
        <td>1</td>
        <td>2</td>
        <td id="ptr-end-5">3</td>
        <td>4</td>
        <td>5</td>
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
        <td id="ptr-start-5">ptr</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>

<div class="line line-arrow-end" data-from="ptr-start-5" data-to="ptr-end-5"></div>
