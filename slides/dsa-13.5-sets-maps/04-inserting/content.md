# Inserting into a hash map

```js
const key = 'david';
const value = 'vocals';

const index = hashString(key); // 3
```


<table style="table-layout: fixed; text-align:center;">
    <tr>
        <td class="background-blue">0</td>
        <td class="background-blue">1</td>
        <td class="background-blue">2</td>
        <td class="background-green" id="inserting-insertion-point">david</td>
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
        <td id="inserting-hash">Hash</td>
        <td></td>
        <td></td>
    </tr>
</table>

<div class="line line-arrow-end" data-from="inserting-hash" data-to="inserting-insertion-point"></div>
