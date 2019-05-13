# Inserting

* Resize if necessary
* Copy all values after the insertion point forward one
* Add the new value
* Increase the length


<div class="biggest">

```js
arr.splice(1, 0, 32);
```

</div>

<table style="table-layout: fixed; text-align:center;">
    <tr>
        <th scope="row">Values</th>
        <td class="background-blue">15</td>
        <td class="background-red">0</td>
        <td class="background-green"><strong>15</strong></td>
        <td class="background-green fragment fragment-dn" data-style="out" data-index="2"><strong>12</strong></td>
        <td class="background-green fragment fragment-dn" data-index="2"><strong>32</strong></td>
        <td class="background-green fragment fragment-dn" data-style="out"><strong>8</strong></td>
        <td class="background-green fragment fragment-dn"><strong>12</strong></td>
        <td class="background-green fragment fragment-dn" data-style="out">6</td>
        <td class="background-green fragment fragment-dn" data-style="in-out">8</td>
        <td class="background-green fragment fragment-dn" data-style="in-out" data-index="2">8</td>
        <td class="background-green fragment fragment-dn" data-index="3"><strong>8</strong></td>
        <td class="background-green">0</td>
        <td class="background-green">0</td>
    </tr>
    <tr>
        <th scope="row">Address</th>
        <td>3</td>
        <td>4</td>
        <td id="ptr-end-10">5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>10</td>
    </tr>
    <tr style="background-color: transparent;">
        <td colspan="9">&nbsp;</td>
    </tr>
    <tr style="background-color: transparent;">
        <td></td>
        <td></td>
        <td></td>
        <td id="ptr-start-10">ptr</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>

<div class="line line-arrow-end" data-from="ptr-start-10" data-to="ptr-end-10"></div>
