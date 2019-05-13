# Pointer arithmetic

<div class="biggest">

```js
ptr += 2;
```

</div>

<table style="table-layout: fixed; text-align:center;">
    <tr>
        <th scope="row">Values</th>
        <td>0</td>
        <td>39</td>
        <td>7</td>
        <td>24</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
    </tr>
    <tr>
        <th scope="row">Address</th>
        <td>0</td>
        <td>1</td>
        <td>2</td>
        <td id="ptr-end-2">3</td>
        <td>4</td>
        <td id="ptr-up">5</td>
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
        <td id="ptr-start-2">ptr</td>
        <td id="ptr-down"></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>

<div class="line line-arrow-end" data-from="ptr-start-2" data-to="ptr-end-2"></div>
<div class="line" data-from="ptr-end-2" data-to="ptr-down" data-from-side="b" data-to-side="lt"></div>
<div class="line" data-from="ptr-down" data-to="ptr-down" data-from-side="lt" data-to-side="rt"></div>
<div class="line line-arrow-end" data-from="ptr-down" data-to="ptr-up" data-from-side="rt" data-to-side="b"></div>
