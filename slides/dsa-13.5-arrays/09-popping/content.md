# Popping

* Decrease the length
* Don't resize - the extra space becomes room for us to grow into


<div class="biggest">

```js
arr.pop();
```

</div>

<table style="table-layout: fixed; text-align:center;">
    <tr>
        <th scope="row">Values</th>
        <td class="background-blue">15</td>
        <td class="background-red">0</td>
        <td class="background-green"><strong>15</strong></td>
        <td class="background-green"><strong>12</strong></td>
        <td class="background-green"><strong>8</strong></td>
        <td class="background-green fragment fragment-dn" data-style="out"><strong>6</strong></td>
        <td class="background-green fragment fragment-dn">6</td>
        <td class="background-green">0</td>
        <td class="background-green">0</td>
    </tr>
    <tr>
        <th scope="row">Address</th>
        <td>3</td>
        <td>4</td>
        <td id="ptr-end-9">5</td>
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
        <td id="ptr-start-9">ptr</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>

<div class="line line-arrow-end" data-from="ptr-start-9" data-to="ptr-end-9"></div>
