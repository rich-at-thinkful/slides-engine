# Removing

* Copy all values after the removal point back one
* Decrease the length


<div class="biggest">

```js
arr.splice(1, 1);
```

</div>

<table style="table-layout: fixed; text-align:center;">
    <tr>
        <th scope="row">Values</th>
        <td class="background-blue">15</td>
        <td class="background-red">0</td>
        <td class="background-green"><strong>15</strong></td>
        <td class="background-green fragment fragment-dn" data-style="out"><strong>32</strong></td>
        <td class="background-green fragment fragment-dn"><strong>12</strong></td>
        <td class="background-green fragment fragment-dn" data-style="out"><strong>12</strong></td>
        <td class="background-green fragment fragment-dn"><strong>8</strong></td>
        <td class="background-green fragment fragment-dn" data-style="out" data-index="2"><strong>8</strong></td>
        <td class="background-green fragment fragment-dn" data-index="2">8</td>
        <td class="background-green">0</td>
        <td class="background-green">0</td>
    </tr>
    <tr>
        <th scope="row">Address</th>
        <td>3</td>
        <td>4</td>
        <td id="ptr-end-11">5</td>
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
        <td id="ptr-start-11">ptr</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>

<div class="line line-arrow-end" data-from="ptr-start-11" data-to="ptr-end-11"></div>
