# Retrieving

* Use pointer arithmetic
* Nth item is at `startPtr + n`


<div class="biggest">

```js
arr[3];
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
        <td class="background-green"><strong>6</strong></td>
        <td class="background-green">0</td>
        <td class="background-green">0</td>
    </tr>
    <tr>
        <th scope="row">Address</th>
        <td>3</td>
        <td>4</td>
        <td id="ptr-end-8">5</td>
        <td>6</td>
        <td>7</td>
        <td id="ptr-up-8">8</td>
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
        <td id="ptr-start-8">ptr</td>
        <td id="ptr-down-8-l"></td>
        <td id="ptr-down-8-r"></td>
        <td></td>
        <td></td>
    </tr>
</table>

<div class="line line-arrow-end" data-from="ptr-start-8" data-to="ptr-end-8"></div>
<div class="line" data-from="ptr-end-8" data-to="ptr-down-8-l" data-from-side="b" data-to-side="lt"></div>
<div class="line" data-from="ptr-down-8-l" data-to="ptr-down-8-r" data-from-side="lt" data-to-side="rt"></div>
<div class="line line-arrow-end" data-from="ptr-down-8-r" data-to="ptr-up-8" data-from-side="rt" data-to-side="b"></div>
